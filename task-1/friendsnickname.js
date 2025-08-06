function FriendsNickname() {
  const surnames = ["Geller", "Tribbiani", "Buffay", "Green", "Bing", "Wheeler", "Hannigan"];
  
  const firstName = prompt("What's your first name?");
  
  if (!firstName) {
    console.log("Enter a valid name.");
    return;
  }

  
  let slicedName = firstName.slice(0, 4);

   if (slicedName.length < 4) {
    slicedName = slicedName.padEnd(4, '*');
    console.log("Name too short? No worries. Stylized it to: " + slicedName);
  }

  
  const now = Date.now();
  const index = now % surnames.length;

  const randomSurname = surnames[index];
  const nickname = slicedName + randomSurname;

  console.log("Your Friends Universe Nickname is:", nickname);
}

FriendsNickname();