defmodule HelloworldWeb.HelloController do
    use HelloworldWeb, :controller

    def index(conn, _params) do
        render(conn, "index.html")
    end

    def show(conn, %{"messenger" => messenger}) do
        render(conn, "show.html", messenger: messenger)
    end
end
