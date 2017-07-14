class CreateGamesapis < ActiveRecord::Migration
  def change
    create_table :gamesapis do |t|

      t.string :name
      t.string :platform
      t.string :release_date


      t.timestamps null: false
    end
  end
end
