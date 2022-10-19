var images = ["Grandmother.jpg", "Uncle.jpg", "Father.jpg", "Mother.jpg"];

        var names = ["Family Book", "Adolfina Colaco - Grandmother", "Joao Furtado - Uncle", "Felix Furtado - Father", "Felicia Pango - Mother", "Floyd Furtado - Son"];

        var age = [75, 52, 43, 37, 10];
        age.sort();
        age.reverse();

        var i = 0

        function update() {
            var numbers_of_family_member_in_array = 5
            if (i > numbers_of_family_member_in_array)
        {

        i = 0;
    }

    var updated_image = images[i];

    var updated_name = names[i];

    var updated_age = age[i];

    document.getElementById("family_member_image").src = updated_image;

    document.getElementById("family_member_name").src = updated_name;

    document.getElementById("family_member_age").src = updated_age;

    var max_number = Math.max.apply(Math, age);
    console.log("The Highest Age is: ", max_number);

    var min_number = Math.min.apply(Math, age);
    console.log("The Lowest Age is: ", min_number);
}