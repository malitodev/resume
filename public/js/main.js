$(document).ready( function(){
    const resumeInfo = {
        "Personal information": {
            "name": "My name is Daniel Pérez.",
            "region": "I’m from Uruguay, South America.",
            "age": "I’m 38 years old.",
        },
        "What I've Learnt": {
            "What I've Learnt":
            "I’m a Full Stack Developer with fifteen year of experience. \
            Since 2007, I have been increasing my knowledge about the newest and best \
            practices of all the languages without distinction, starting with HTML, CSS, JS, to \
            backend languages like PHP to Python and Ruby, and DBs like MYSQL, MONGO, \
            as well as Libraries like jQuery, Sass, Less, React, Angular, Vue, Doctrine and the \
            like. \
            I have worked with CMS like WordPress, Drupal, Prestashop, Symfony, Laravel. \
            I always want to hydrate the projects with techniques such us scrum \
            methodologies, control version, lot of confidence and love." 
        },
        "Working Experience": {
            "Freelancer" : 
                "I started working as a freelancer, gaining confidence, experience and\
                earning money." ,
            "Personal Business" : 
                "The next step was to build an association with different talents and start offering\
                our services as a “business consultancy”, helping companies from scratch to success.\
                I was in charge of developing, communication and coffe making.\
                It didn´t work XD. I learned that having a company is too hard and it pays badly."  
        }
    };

    const contentConstructor = function( cont, id, title){
        
        return '<p>'+cont+'</p>';

    }

    const columnConstructor = function(se, oddEven, id){
        let className = id.replace(/\s+/g, '-');
        var column = "";
        if(se == "start"){
            if(oddEven % 2 == 0){
                column += '<div class="col-9 left '+className+'"><h2>'+id+'</h2>';
            }else{
                column += '<div class="col-3 left"></div><div class="col-9 right '+className+'"><h2>'+id+'</h2>';
            }
        }else{
            if(oddEven % 2 == 0){
                column += '</div><div class="col-3 right "></div>';
            }else{
                column += '</div>';
            }
        }
        return column;
    }

    const rowConstructor = function(se){
        if(se == "start"){
            return '<div class="row mt-5">';
        }else{
            return '</div>';
        }
    }

    var buildStructure = function(element){

        var counter = 0;
        var constructor = "";
        jQuery.each(resumeInfo, function(a, e){
            constructor += rowConstructor("start");
            constructor += columnConstructor("start", counter, a);
            jQuery.each(e, function(z, d){
                
                constructor += contentConstructor(d, z, a);
                
            })
            constructor += columnConstructor("end", counter, a);
            constructor += rowConstructor("end");

            jQuery(element).append(constructor);
            ++counter;
            constructor = "";
        });
    };

    buildStructure("#app");

});