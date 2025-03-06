
# Get to Know Your Peers!

## Description
Over the next few weeks, students will become more familiar with git and gitflow by  helping to slowly build a final, single HTML page with bios of everyone. 

### Week 2

**Goal**: Introduce cloning, creating a new branch, and pushing to remote alongside the *Intro to Git* and *Git Branching* lectures. 

 1. Educator creates folder
	 - creates a README.md of what to expect
	 - `git init`
	 - `git add .`
	 - `git commit -m "initial commit"`
 2. Educator creates repo
	 - adds in 3 lines from Github
	 - adds all students as collaborators
	 - creates `develop` branch
	 - creates `questions.html` with 3 starter questions the students will answer (and add, commit, push)
		 - Where are you from?
		 - What is your favorite food?
		 - Hit shuffle on your music library. What song pops up?
 3. Students clone repo, checkout to `develop`, and create a branch `firstname-lastname`. 
 4. Students answer the questions with `<p>` tags and add their name as an `<h2>`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Get to Know Your Peers!</title>
  </head>
  <body>
	<h1>Get to Know Your Peers!</h1>
	<section>
		<h2>Firstname Lastname</h2>
		<details>
			<summary>Where are you from</summary>
		<p>Indy</p>
		</details>
		<details>
			<summary>What is your favorite food?</summary>
			<p>Coffee</p>
		</details>
		<details>
			<summary>Hit shuffle on your music library--what song pops up?</summary>
			<p>Punch</p>
		</details>
	</section>
</body>
</html>
```
 5. Students add, commit, push their branch (they'll be prompted with the `--set-upstream` message to copy and paste)

### Week 3

**Goal**: Students answer more questions and push changes.  

 1. Educator adds questions and `styles.css` in `develop` 
 ```css
section {
  border: 1px dotted;
  padding: 1rem;
  margin: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 1.125rem;
  text-align: left;
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

tr:hover {
  background-color: #f1f1f1;
}
```
 2. Students update/pull/merge
	```
	git checkout develop
	git pull
	git checkout firstname-lastname 
	git merge develop
	```
 3. Resolve any merge conflicts (if so, talk through this with the students)
 4. Students answer new questions
```html
...
  <body>
	<h1>Get to Know Your Peers!</h1>
	<section>
		<h2>Firstname Lastname</h2>
		<!-- prior questions -->
		<details>
			<summary>If you won the lottery, what's the first thing you'd spend money on?</summary>
			<p>a new house</p>
		</details>
 		<details>
			<summary>Ordered by preference, name your top 3 travel destinations.</summary>
			<ol>
				<li>Italy</li>
				<li>England</li>
				<li>Mexico</li>
			</ol>
		</details>
		<details>
			<summary>Unordered, name 3 people (alive or deceased) that you'd like to have dinner with.</summary>
			<ul>
				<li>Grandpa</li>
				<li>Grandma</li>
				<li>Mahler</li>
			</ul>
		</details>
	</section>
</body>
</html>
```
 5. Students add, commit, push

### Week 4

**Goal**: ﻿﻿Students assigned to comment on another student's html; utilize fetch.

 1. Students fetch and checkout to partner's branch.
	```
	﻿﻿git fetch --all
	git branch -r (to find their partner's branch)
	git checkout -b partners-branch origin /partners-branch
	```

 2. Students add comments (commented code) to each others answers; add, commit, push
 3. To see the comments a student received, they should be inside of their own branch and run `git pull origin firstname-lastname`

### Week 5

**Goal**: Repeat prior 2 weeks tasks: answer more questions and push & comment on a new partner's answers.

 1. Educator adds more questions
```html
...
  <body>
    <h1>Get to Know Your Peers!</h1>
    <section>
    <!-- prior questions -->
      <details>
        <summary>Why did you want to become a software engineer?</summary>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          et enim maxime iste, voluptatibus consequatur ea quas explicabo
          asperiores aliquam minus nostrum aperiam ullam adipisci quasi ipsam
          doloribus laboriosam illo.
        </p>
      </details>
      <details>
        <summary>
          In a table, what are your top 3 movies, their genre, and why you like
          them?
        </summary>
        <table>
          <tr>
            <th>Movie Title</th>
            <th>Genre</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Inception</td>
            <td>Sci-Fi</td>
            <td>
              A mind-bending thriller that explores the concept of dream
              invasion.
            </td>
          </tr>
          <tr>
            <td>Forrest Gump</td>
            <td>Drama</td>
            <td>An inspiring story of a man's extraordinary life journey.</td>
          </tr>
          <tr>
            <td>The Matrix</td>
            <td>Action</td>
            <td>
              A revolutionary sci-fi film about the nature of reality and human
              freedom.
            </td>
          </tr>
        </table>
      </details>
      <details>
        <summary>
          Would you rather fight 100 duck-sized horses or 1 horse-sized duck?
        </summary>
        <div>
          <div>
            <label for="horses">100 duck-sized horses</label>
            <input type="checkbox" id="horses" disabled />
          </div>
          <div>
            <label for="duck">1 horse-sized duck</label>
            <input type="checkbox" id="duck" checked disabled />
          </div>
        </div>
      </details>
    </section>
  </body>
</html>
```
 2. Students `git checkout firstname-lastname ` and `git pull origin develop`
 3. Resolve any merge conflicts (if so, talk through this with the students)
 4. Students answer new questions; add, commit, push
 5.  Students fetch and checkout to *new* partner's branch.

		```
		﻿﻿git fetch --all
		git branch -r (to find their partner's branch)
		git checkout -b partners-branch origin /partners-branch
		```

 6. Students add comments (commented code) to each others answers; add, commit, push
 7. To see the comments a student received, they should be inside of their own branch and run `git pull origin firstname-lastname`

### Week 6

**Goal**: Students style their html file.

 1. Students make a feature branch off of their most recent `firstname-lastname` branch called `feature/firstname-lastname-styles`
 2. They add a css file `firstname-lastname-styles.css` & style their html file; add, commit, push
 3. To merge their own changes:
	```﻿﻿
	git checkout firstname-lastname
	git merge feature/firstname-lastname-styles
	```
 4. add, commit, push

### Week 7

**Goal**: Join Two Files/Branches and Resolve Any Merge Conflicts

*(while screen-sharing/pair-programming)*

 1. Pair students and create the joint branch
 2. One student (Student 1, for example) creates a new branch locally and pushes it to GitHub.
	```
	git checkout firstname-lastname1
	git pull firstname-lastname1
	git checkout -b joint/firstname-lastname1-firstname-lastname2
		//i.e., "joint/john-smith-jane-doe
	git push -u origin joint/firstname-lastname1-firstname-lastname2
	```
3. One student creates a Pull Request (PR):
	 -  Student 1, for example, initiates a PR to compare and merge the other Student 2’s branch into the joint branch via GitHub.
		- In the repository on GitHub, go to the “Pull requests” tab.
		- Click “New pull request”.
		- Set the base branch to `joint/firstname-lastname1-firstname-lastname2` and then compare that branch to Student 2’s branch (`firstname-lastname`).
		- Click “Create pull request” and fill out any details as necessary.
4. If there are merge conflicts, resolve them in VSCode.
	- Both students fetch the remote branches, checkout the joint branch, and merge Student 2’s branch locally to resolve conflicts.
		```
		git fetch
		git checkout joint/firstname-lastname1-firstname-lastname2
		git merge origin/firstname-lastname2
		```
- Add, commit, push

5. Merge the PR
	- Finalize the merge on GitHub by merging the PR created earlier.
	- On the PR page, click “Merge pull request”.
	- Confirm the merge.
6.	Have the updated branch locally:
	- Both students ensure they have the latest joint branch.
```
git checkout -b joint/firstname-lastname1-firstname-lastname2 origin/joint/firstname-lastname1-firstname-lastname2
git pull origin joint/firstname-lastname1-firstname-lastname2  //Optional as they should have the most up-to-date content from that branch anyway.
```

### Week 8

**Goal**: Join Joined-Files together (3-4 groups of multiple joined-files from previous week)

### Week 9

**Goal**: Previous groups all join to and push/merge to the single html file in the develop branch. Then merge develop to main.

<style>
  .red-text { color: red; }
  .highlight { background-color: yellow; }
</style>

<p class=“red-text”>this is a test</p>
<p style=“color:red”>this is a test</p>
