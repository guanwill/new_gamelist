# class MyDevise::RegistrationsController < Devise::RegistrationsController
#   protected
#   def after_update_path_for(resource)
#     games_path
#   end
# end


#This is a setup for redirecting users to desired root after they update their user profile. All you need to do is uncomment a few areas including this controller, then move the registrations folder under devise into controllers/my_devise folder and it should work. 
