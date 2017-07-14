class ChangeProgressData < ActiveRecord::Migration
  def self.up
   change_column :games, :progress, :string
  end
  def self.down
   change_column :games, :progress, :integer
  end
end
