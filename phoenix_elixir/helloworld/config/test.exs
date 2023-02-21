import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :helloworld, Helloworld.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "helloworld_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :helloworld, HelloworldWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "f/rzIhZuj3IgIEGEtqJlwZ3XBT4Jtm0Uca3OjEWEkfCkMUhZQgVqhTyJHe6wH9gs",
  server: false

# In test we don't send emails.
config :helloworld, Helloworld.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
