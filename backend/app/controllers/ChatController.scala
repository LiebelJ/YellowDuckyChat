package controllers

import javax.inject._

import play.api.Logger
import play.api.libs.functional.syntax._
import play.api.libs.json.Reads._
import play.api.libs.json._
import play.api.mvc._
import play.modules.reactivemongo._
import reactivemongo.api.ReadPreference
import reactivemongo.play.json._
import reactivemongo.play.json.collection.JSONCollection

import scala.concurrent.{ExecutionContext, Future}

/**
  * A bit more complex controller using a Json Coast-to-coast approach. There is no model for chat and some data is created dynamically on creation
  * Input is directly converted to JsObject to be stored in MongoDB
  */
@Singleton
class ChatController @Inject()(val reactiveMongoApi: ReactiveMongoApi)(implicit exec: ExecutionContext) extends Controller with MongoController with ReactiveMongoComponents {

  val transformer: Reads[JsObject] =
    Reads.jsPickBranch[JsString](__ \ "author") and
      Reads.jsPickBranch[JsString](__ \ "message") and
      Reads.jsPickBranch[JsString](__ \ "timestamp") reduce

  def chatsFuture: Future[JSONCollection] = database.map(_.collection[JSONCollection]("chat_history"))


  def createFromJson = Action.async(parse.json) { request =>
    request.body.transform(transformer) match {
      case JsSuccess(chat, _) =>
        for {
          chats <- chatsFuture
          lastError <- chats.insert(chat)
        }
          yield {
            Logger.debug(s"Successfully inserted with LastError: $lastError")
            Created("Created 1 person")
          }
      case _ =>
        Future.successful(BadRequest("invalid json"))
    }
  }

  def findMessage(message: String) = Action.async {
    // let's do our query
    val cursor: Future[List[JsObject]] = chatsFuture.flatMap{ chats =>
      // find all people with name `name`
      chats.find(Json.obj("message" -> message)).
      // sort them by creation date
      sort(Json.obj("timestamp" -> -1)).
      // perform the query and get a cursor of JsObject
      cursor[JsObject](ReadPreference.primary).collect[List]()
  }

    // everything's ok! Let's reply with a JsValue
    cursor.map { chats =>
      Ok(Json.toJson(chats))
    }
  }

  def findAll() = Action.async {
    // let's do our query
    val cursor: Future[List[JsObject]] = chatsFuture.flatMap{ chats =>
      // find all people with name `name`
      chats.find(Json.obj()).
        // sort them by creation date
        sort(Json.obj("created" -> -1)).
        // perform the query and get a cursor of JsObject
        cursor[JsObject](ReadPreference.primary).collect[List]()
    }

    // everything's ok! Let's reply with a JsValue
    cursor.map { chats =>
      Ok(Json.toJson(chats))
    }
  }
}
