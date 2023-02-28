function myFunc(user, time) {
    const hour = time.getHours();
    const welcomeTypes = ['morning', 'afternoon', 'evening'];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];

  return `Good ${welcomeText} ${user}!`
}

module.exports = myFunc;