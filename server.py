from bottle import get, run, static_file

@get("/")
def index_file():
    return send_static("/index.html")

@get("/<path:path>")
def send_static(path):
    return static_file(path, root=".")

run(host="0.0.0.0", port=7000)
