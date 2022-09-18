# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: 
Breakdown of scenario:
Model: Cohort, has_many 
Model: Student, belongs_to
foreign key: not assigned to either
---------------------------
After a model is created, the next step to take is to migrate, if that step was taken or not would change how we proceed, but i have a solution that will solve it either way. 
    $ rails db:migrate
    VSCODE: go into db>schema.rb and ensure you did not create a foreign key and that both models are created
    assuming they are and there is no foreign key
    $ rails generate migration add_foreign_key_to_student
    VSCODE: go into db>migrate if there is multiple for some reason, you are looking for the one that says 
        class AddColumnsToList < ActiveRecord::Migration[6.0]
            def change
            end
        end
    VSCODE: you are now going to add "add_column :students, :cohort_id, :integer" to the method resulting in
        class AddColumnsToList < ActiveRecord::Migration[6.0]
            def change
                add_column :students, :cohort_id, :integer
            end
        end
    $ rails db:migrate    
You have successfully added a foreign key to students that pairs with corhort if you set up the associations. it is not part of the question asked so i will give a quick answer
app/models/cohort.rb add has_many :students
app/models/student.rb belongs_to :cohort


Researched answer:


    Breakdown of scenario:
Model: Cohort, has_many 
Model: Student, belongs_to
foreign key: not assigned to either
---------------------------
After a model is created, the next step to take is to migrate, if that step was taken or not would change how we proceed, but i have a solution that will solve it either way. 
    $ rails db:migrate
    VSCODE: go into db>schema.rb and ensure you did not create a foreign key and that both models are created
    assuming they are and there is no foreign key
    $ rails generate migration add_foreign_key_to_student
    VSCODE: go into db>migrate if there is multiple for some reason, you are looking for the one that says 
        class AddColumnsToList < ActiveRecord::Migration[6.0]
            def change
            end
        end
    VSCODE: you are now going to add "add_column :students, :cohort_id, :integer" to the method resulting in
        class AddColumnsToList < ActiveRecord::Migration[6.0]
            def change
                add_column :students, :cohort_id, :integer
            end
        end
    $ rails db:migrate    
You have successfully added a foreign key to students that pairs with corhort if you set up the associations. it is not part of the question asked so I will give a quick answer
app/models/cohort.rb add has_many :students
app/models/student.rb belongs_to :cohort

    I had to do this like 30 min before I answered this question. that is why I did such an amazing job on the non-researched answer. 
    Something that also needs to be kept in mind is the pluralizatoin of the model names.
    The ability to use other association terms, and somewhat to do with this, the changing of route names when  having rails build them for you, which in turn goes back to pluralizatoin. 
     This is a very simple rails project with an easy association and you forgot a foreign key. 
     Now imagine if it was lots of associations and as you add new controllers names are changing and it can all get very confusing. 
     for the routes aspect of it rails routes-E, is very helpful. 
     and for this specific pluralization issue I keep running into and screwing up. 
    I have to verbally say out loud, "a student doesnt have multiple cohorts, a cohort has multiple students." 
    I say that a few times, then shake my head like im ready to start inputting this info, but the whole time im doing it and I get to a place that may be pluralized, I have to say it outloud again just to be sure. 
     A small mistake on the this can be very annoying. 
     Another major thing that I have run into. 
     way worse than anything you just did by forgetting the foreiegn key, but kind of the same. 
     I forgot the foreign key and also had rails generate all the routes for me. 
     and then when I went back and added the foreign key to it as described above, I realized that the routes were not working correctly and that something was now screwed up. 
     Due to the porjects being small it is a very possible option to just clean slate restart and go again from scratch, but that will not always be an option and I think it is important that I take the time to try and figure out how to solve these errors I am running into when I make a mistake and how to resolve them instead of starting over. 



2. Which RESTful routes must always be passed params? Why?
 Your answer: 
    A param is attached to an instance variable and the param makes it so we can pass a value from a hash. So anything that needs a specific value will absolutely need a param, i am refering to :id.
    Show, Update, Edit, and Destroy have to have params because they need to know what to show or what to edit/update, or what to delete, and that is figured out by using the params :id. I believe we do not "have" to have them when creating. i know that we use strong params but i dont think that we have to. see example below for a visual representation of what i stated
            For example purposes, i am going to call the model Animal
                The RESTful routes are:
                    Index - animals.all
                    Show - animal/id
                    Create - strong params
                    New - 
                    Update - /id
                    Edit - /id
                    Destroy - /id



Researched answer:
I had multiple people ask me what the answer to this was and what I thought the answer was and I think that although there may be a way to create without a param, it is stupid not to. I do not know why i think you can, but you should. You should check to make sure that what a user is inputting is valid. so i am going to say, Show, Create, Update, Edit, and Destroy all need params. YOu should put the ohhhhhh wait. technically the create does not have params, it checks the vilidity in  a different method in the private section that uses params. So we will say Create needs 50% params. :)
    
    How i explained it to someone else: 
    The param is just a means of accessing a specific part of the model/hash
    so like animals.all works without a param cause its like a blunt everything command
    but animal/id, or well in the controller it is written as
    animal = Animal.find(params[:id])
    has to have the param :id, because we are telling it to go into Animal model and find something with that id



3. Name three rails generator commands. What is created by each?
Your answer:

$ rails generate model(Animal legs:string eyes:number food:string birthday:date) 
    *stuff in () is the model, will change per project
    Is used to create a model from my console. it does not have commas between the differnt things and dont forget the foreign key if you the model you are creating needs it, see answer 1 if you screw that up. You can find what ws created by this by going to db>schema.rb

$ Rails generate controller (Animal)
    *stuff in () is the controller name, will change per project
    Is used to create a controller file (app>contorllers>animal_controller.rb) and the view folder (app>views>main), but not a view file that is important. 
    The controller is the brains, it takes in the RESTful routes and decides what methods do what it is very very important. 
    The other thing created when the generate controller command is run is the View folder. If you want to pair your controller and model and route, assuming you created a route, you will have to view it somehow. 
    We can create a file in our view folder called animal.html.erb, the erb means embedded ruby.
    now we can make this page look however we want


$ rails generate resource (Animal legs:string eyes:number food:string birthday:date) 
    *stuff in () is the model a=made
        This command is super cool and save me a lot of work. it creates a model, creates rspec files, creates a controller, creates a a view and creates some helpers, and lastly it creates a route! this thing is so awesome. it just did all the work of the other 2 commands before it plus a lot of thinking and the making of the route and just got rid of it. But there is a downfall, i did not make it, so i am constantly checking routes-E to see what the routes are and if they have changed for whatever reason

Researched answer: 
    I ran these different commands now and checked to see what they actually did and not just a guess... OH MY GOD! There is a css file created when you run the Rails generate controler (Animal). That was really the biggest thing i just learned. I also learened that you can use the generate resource command but if you forgot to add rspec you will have to add rspec and because you already created everything else without rspec you will have to add it to the different models and controllers bucasue that is what the generate resourse command would have done for you had you had it. the generate resouse command is awesome you just have to make sure you do the proper steps prior.

$ rails generate model(Animal legs:string eyes:number food:string birthday:date) 
    *stuff in () is the model, will change per project
    Is used to create a model from my console. it does not have commas between the differnt things and dont forget the foreign key if you the model you are creating needs it, see answer 1 if you screw that up. You can find what ws created by this by going to db>schema.rb

$ Rails generate controller (Animal)
    *stuff in () is the controller name, will change per project
    Is used to create a controller file (app>contorllers>animal_controller.rb) and the view folder (app>views>main), but not a view file that is important. 
    The controller is the brains, it takes in the RESTful routes and decides what methods do what it is very very important. 
    The other thing created when the generate controller command is run is the View folder. If you want to pair your controller and model and route, assuming you created a route, you will have to view it somehow. 
    We can create a file in our view folder called animal.html.erb, the erb means embedded ruby.
    now we can make this page look however we want


$ rails generate resource (Animal legs:string eyes:number food:string birthday:date) 
    *stuff in () is the model a=made
        This command is super cool and save me a lot of work. it creates a model, creates rspec files, creates a controller, creates a a view and creates some helpers, and lastly it creates a route! this thing is so awesome. it just did all the work of the other 2 commands before it plus a lot of thinking and the making of the route and just got rid of it. But there is a downfall, i did not make it, so i am constantly checking routes-E to see what the routes are and if they have changed for whatever reason



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
students#index
        students = Student.all 
-this method is used to pull all of the students from the model 

action: "POST" location: /students
students#create
        student = Student.create(student_params)
        if student.valid?
            render json: student
        else 
            render json: student.errors
        end
- with this method, it takes a filled out form, created with new, and when that form is submitted, via the POST it is going to try and create a new student. 
I am calling on the "(student_params) to ensure the validity of the inputs the user made. 
I am also utilizing render json to show some text when someone has attempted to add to the hash afer its validity has been checked

action: "GET" location: /students/new
students#new
-With this method, it generates a form for the user to fill out and then it can post via the create.

action: "GET" location: /students/2
students#show
        def show
            student = Student.find(params[:id])
        end
- With this method, it is going into the model, Student, and finding whatever is contained in the has with the :id given, which in this case is 2 so it is getting the student with the unique ID of 2
the students name is Clifford Roecker, and he is the best student of them all :)

action: "GET" location: /students/2/edit
students#edit-
-With this method, it is pairing with the update and show methods, it is going into the model, Student, and finding whatever is contained in the hash with the :id given, which in this case is 2 so it is getting the student with the unique ID of 2. it then populates a form with the data already stored for that Student, so the user can edit the info, and then it can utilize the update/patch

action: "PATCH" location: /students/2
students#update
        def update
            student = Student.find(params[:id])
            student.update(student_params)
            if student.valid?
                render json: student
            else 
                render json: student.errors
            end
        end 
- with this method, it is using the form that supplied via the GET/EDIT and changing the info about the student with the ID of 2. it is also running it through the student_params, to make sure that it is valid and someone isnt trying to ruin my database of awesome students. 

action: "DELETE" location: /students/2
students#destroy
  def destroy
        animal = Animal.find(params[:id])
        if animal.destroy
            render json: animal
        else 
            render json: animal.errors
        end
    end
- With this method, it is wow, it is doing the same thing every other method has done to find the student with the id of 2 but this time it is deleting it. 
If it is able to delete the student located with the unique ID of 2 then it will, if not it will produce an  error... via rendering JSON :)



CRUD        HTTP            ROUTES
Create      post            create
Read        get             edit/new/show/index
Update      put/patch       update
Delete      delete          destroy

Prefix        Verb    URL Pattern                  Controller#Action
students      GET     /students(.:format)          students#index
              POST    /students(.:format)          students#create
new_student   GET     /students/new(.:format)      students#new
edit_student  GET     /students/:id/edit(.:format) students#edit
student       GET     /students/:id(.:format)      students#show
              PATCH   /students/:id(.:format)      students#update
              PUT     /students/:id(.:format)      students#update
              DELETE  /students/:id(.:format)      students#destroy




5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. I want to have a home page that has a bulletin board with differnt topics/list names
2. I want to be able to make different ToDo lists and have them show up with different colored pins on the bulletin board
2. I want to be able to have a specific ToDo list look like yellow lined paper 
3. Each ToDo list item will have a check boxe next to it and the Item will be written in black
4. For every list there will also be a Not-ToDo list that pairs with it, the items on that list are  items which were ToDo items that have already been acomplished.
5. Not-ToDo items will have the check box filled in with an "X" and the words will be in grey
6. At the bottom right corner there will be an "X" button that takes you to the Not-Todo list.
7. At the top right there will be a button that says "all" and it combines the Todo-List and Not-ToDo list on one list
8. when creating a new list there is a graphic motion of the paper being flipped over the back of the notepad
9. If all of the items on the To-Do list are comopleted and checked off, then the application will have a graphinc of confetti from all sides and a triumphant song play. the song will be " the final of Beethoven's Symphony no 9" AKA Ode to JOY snippet which i thought of from my old fav game peggle, an example can be found here > "https://www.youtube.com/watch?v=HgAh95IrfIs&ab_channel=DanielHernandez"
10. If the user has notifications on and there is still things left on the list, every 10 minutes it sends the user a notifcation that they "have unfinshed business to attend to"