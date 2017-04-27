name := """YellowDuckyChat-Backend"""

version := "1.0.1"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

routesGenerator := InjectedRoutesGenerator

libraryDependencies ++= Seq(
  "org.reactivemongo" %% "play2-reactivemongo" % "0.11.12"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"


scalacOptions in ThisBuild ++= Seq("-feature", "-language:postfixOps")


/* ================================= WEBPACK ================================== */

val frontEndProjectName = "frontend"
val backEndProjectName = "backend"
val distDirectory = ".." + backEndProjectName + "public/dist"

// Starts: angularCLI build task
val frontendDirectory = baseDirectory {_ /".."/frontEndProjectName}

val webpack = sys.props("os.name").toLowerCase match {
  case os if os.contains("win") ⇒ "cmd /c node_modules\\.bin\\webpack"
  case _ ⇒ "node_modules/.bin/webpack"
}

val params = " --config webpack.config.js --progress --colors --display-error-details"

val ngBuild = taskKey[Unit]("webpack build task.")
ngBuild := { Process( webpack + params , frontendDirectory.value) ! }
(packageBin in Universal) <<= (packageBin in Universal) dependsOn ngBuild
// Ends.