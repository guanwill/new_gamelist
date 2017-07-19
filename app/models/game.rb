class Game < ActiveRecord::Base

  GENRES = ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy', 'Sports', 'FPS', 'Novel', 'Others']
  PLATFORMS = ['3DS', 'WII U', 'Switch', 'PC', 'PS4', 'XBOX', 'PS Vita', 'Mobile', 'Others']
  PROGRESS = ['0%', '10%', '25%', '50%', '75%', '100%', '200%', 'Wish', 'Contemplating', 'Paused']

  validates :title, presence: true, :uniqueness => true
  # validates :platform, presence: true


end
