class ChangeProgressType < ActiveRecord::Migration
  def change

    change_table :games do |t|
      t.change :progress, :string
    end
    
  end
end
