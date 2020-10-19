import shell from "shelljs"
import { appEntry } from "./index"

const standard_input = process.stdin
standard_input.setEncoding("utf-8")

const welcomeMessage = () => {
  console.log(`Welcome, enter the location names and postal codes for example. Paris, London, 78009
	* Press enter to 'clear', 'exit', or 'restart'`)
}

const start = () => {
  welcomeMessage()

  standard_input.on("data", data => {
    switch (data) {
      case "exit\n":
        console.log("Closing ..., Thanks for using this app")
        process.exit()
        break
      case "\n":
        console.log("\n")
        start()
        console.log("\n")
        break
      case "clear\n":
        shell.exec("clear")
        welcomeMessage()
        break
      case "restart\n":
        console.log("Restarting...")
        shell.exec("clear")
        start()
        break
      default:
        const formatedData = data
          .replace(/\n$/, "")
          .replace(/[^a-zA-Z0-9,^]/g, "")
          .split(",")
        console.log("Processing... \n \n")
        console.log("Response:")
        appEntry(formatedData)
    }
  })
}

start()
