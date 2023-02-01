function propsCount(currentObject){
    return Object.keys(mentor).length
}

let mentor = { 
course: "JS fundamental", 
duration: 3,
direction: "web-development" 
};

propsCount(mentor);