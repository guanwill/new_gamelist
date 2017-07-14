class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :platform
      t.date :release_date
      t.integer :progress
      t.integer :rating

      t.timestamps null: false
    end
  end
end
