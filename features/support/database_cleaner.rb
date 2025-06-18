# Unset DATABASE_URL to prevent DatabaseCleaner's remote database safeguard
# This allows us to use the test database config from database.yml
ENV.delete('DATABASE_URL') if ENV['DATABASE_URL']

require 'database_cleaner/active_record'

DatabaseCleaner.allow_remote_database_url = true

Before do
  DatabaseCleaner.strategy = :transaction
  DatabaseCleaner.start
end

After do
  DatabaseCleaner.clean
end
