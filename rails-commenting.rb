# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The controller is the brains of the operation. It is in charge of taking in the request from the user and is in charge of the coordination between the model and the views. It is either created by using generate controler or generate resource. It is also in charge of caching, helper modules and sessions. Helpers, do lots of stuff, one example is with the view, it eliminates the need for having an "if statement" in the view, ex 
# view:
# <% if @user && @user.email.present? %>
# <%= @user.email %>
# <% end %>
# instead you can put it in the controller ex
# controller:
# module SiteHelper
  # def user_email(user)
    # user.email if user && user.email.persent?
  # end
# end    
# for more info see https://mixandgo.com/learn/ruby-on-rails/beginner-guide-rails-helpers
class BlogPostsController < ApplicationController
  def index
    # ---2) the index method makes an Active Record call that will save all the content from the database as an instance variable @posts
      @posts = BlogPost.all
  end

  # ---3) Show! thats a RESTful Route! Show looks for one item in the database. In the eaxample below: 
  # the instance variable @post is assigned to an item. 
  # the method explains how to get the item:
  # it makes an Active Record call to the model "BlogPost" that will "find" that one item by using its unique "id" paired with a "param". a param makes it so we can pass a value of a hash.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The method new is a RESTful Route! New displays a form for the user to fill out.
  # we then, thank goodness Rails 6 hooked us up, we can then use form_with and slap together a from super fast for the user to fill out. Thats it, next its onto the create method to take over.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The Create method is yet again, drum roll please. drum drum drum, a RESTful Route.
    # it is in charge of submitting the users data into the database.
    # In the example below, it is using an instance variable, @post, to store the information that will, if it is valid, be "created" to the model "Blogpost" as long is it passes the blog_post_params validity test which can be found on question 9 of this document.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) it is a lot like new. In the sense that it gives the user a form, but instead of a blank form its already filled out. Its filled out with the information from whatever id we want to change. we accomplish this by doing the following
    # the instance variable @post is assigned to an item. 
    # the method explains how to get the item:
    # it makes an Active Record call to the model "BlogPost" that will "find" that one item
    # it finds the item by using its unique "id" paired with a "param". 
    # a param makes it so we can pass a value of a hash.
    # once we have the item, it is displayed in a form  like the new method
    # but the form is already filled in and we can now change it, and submit it and then its up the the update method to take it from here.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) We have an item that we found by its unique id utilizing params and and instance variable. I covered all of that up able in "edit". Now we do the same then we did in the "Create" method, where we will check all the info in the blog_post_params method below to make sure it is valid. and if it is. We toss that puppy right right back in where it was but with all newly edited/updated information. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) Destroy is a method that operates just like the other methods above when using the instance variable and so on. 
      # But as for the if else statement and the redirect_to is telling the browser to redirect the user to the path associated with blog_posts
      # In this case with the redirection on line ******, the path associated with blog_post(@post)
      # It will use the find by id and show the item that was not deleted and was unseccessful. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a keyword in ruby. Ruby make it so that everything below the word private is special. 
  # The methods below the Private line have a fixed scope and can not be called anywhere else in the program. 
  # the Strong params methods are typically alwasys at the bottom of the controller so they can be contained inside the private section
  private
  def blog_post_params
    # ---10) STRONG PARAMS!!! I have been talking about this section a lot up above. The strong params are in charge of validation, they are in charge of what can and can not go into the database.
    # They are like the rules and guidelines that are set up so that the user cant totally break everything and all our hard work is wasted.
    # There is also hackers, hackers hate strong params becuase it makes their lives more difficult.
    # strong params are split in 2 sections. require and permit
    #  the .require(:blog_post) is saying hey, make sure everything coming up next in the permit section is the only stuff getting passed into my database in the model blogpost when using the methods create or update.
    # permit is saying yo, this is the only sutff going in my database. if its not these, dont let them in. you dont have to have a title, or a content, but you cant have anything else, so you might as well just do the title and content cause nothing else is getting in. 
    params.require(:blog_post).permit(:title, :content)
  end
end