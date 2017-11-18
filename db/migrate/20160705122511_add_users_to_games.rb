class AddUsersToGames < ActiveRecord::Migration
  def change
    # add_reference :games, :user, index: true
    # add_foreign_key :games, :users
    add_reference :games, :user, foreign_key: true
  end
end
