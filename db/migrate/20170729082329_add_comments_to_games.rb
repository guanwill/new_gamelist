class AddCommentsToGames < ActiveRecord::Migration
  def change
    add_column :games, :comments, :string
  end
end
