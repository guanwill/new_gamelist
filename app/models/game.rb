class Game < ActiveRecord::Base

  GENRES = ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy', 'Sports', 'FPS', 'Novel', 'Others']
  PLATFORMS = ['3DS', 'Switch', 'PC', 'PS4', 'XBOX', 'PS Vita', 'Mobile', 'Others']
  PROGRESS = ['0%', '10%', '25%', '50%', '75%', '100%', '200%', 'Wish', 'Contemplating', 'Paused']

  validates :title, presence: true, :uniqueness => {:scope => :user_id}
  validates :platform, presence: true
  validates :progress, presence: true
  # make game unique for each user

end
