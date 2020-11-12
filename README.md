# Random Password Generator
## Responsive random password generator web application

What is the point of a password generator? The answer to that question quickly becomes clear the moment you're forced to create a new password for any random website. So, on your first try you use your standard password. SPOILER ALERT: it doesnt work. Why? It could be any number of reasons: you didn't use the right characters or include a capitol letter or maybe your password is too long or too short. Then the process becomes changing your standard password to meet the requirements of this specific website. Then comes the big issue: What if you forget how you modified your password to fit the criteria? 

Well, finding a cure for memory loss is a complicated journey and perhaps that is a journey for a medical professional. However, finding a random password to meet a given criteria might be a possibility. And rumor has it some computers can actually remember your passwords for you.

## The Challenges
There were certain challenges to creating a password generator. First figuring out what code should be used (Anthony's psuedocode was a huge help there). Then how to get that code to work the way that it should. I think the most difficult part was understanding what each piece of code was actually doing. Console.log was my friend there. Then deciding on what method was best suited for the job at hand. Functions took me back to my days in algebra or calculus; I really cant be sure which. Figuring out how to append the password to the appropriate field was the most difficult part. CONCAT proved to be a friend there to add new characters to the charactersToUse array. I think my biggest challenge was simply getting started and being motivated enough to continue when the codes didnt work out.



## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```