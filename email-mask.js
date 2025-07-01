function maskEmail(email) {
  
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const masked = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];

  return masked + domain;
}

const email = "apple.pie@example.com"
const email2 = "freecodecamp@example.com";

console.log(maskEmail(email));
console.log(maskEmail(email2));
