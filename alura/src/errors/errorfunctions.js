export default function errorsManagement(err) {
  if (err.code === "ENOENT") {
    throw new Error("File not found");
  } else {
    return "An error occurred";
  }
}
