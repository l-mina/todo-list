
const Card = function(title,description,dueDate,completed) {
    let card = {};

    card.title = title;
    card.description = description;
    card.dueDate = dueDate;
    card.completed = completed;

    card.test = function () {
        return (`The project ${card.title} due by ${card.dueDate} is ${card.completed}`);
    };
    return card
};

export {Card};