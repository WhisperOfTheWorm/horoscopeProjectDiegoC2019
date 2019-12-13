var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "That date doesn't exist Baka."];
var messages = ["You are your highest authority. Independence is a craving that is often ameliorated when you operate on your own and focus on freedom anytime you feel confined. Luckily, there’s no need to duck and hide from your obligations today. Take charge, be the boss of you, and speak up about what’s realistically possible. Slow down the urge to make promises regarding the future. Seek higher ground in any encounter and you will end up on top.", "Daydreams appear to jettison you into outer space today. Your lofty hopes and mystical journeys may earn you the honorary title of space cadet. But the truth is you really don’t mind what others think. Keep a notepad handy to journal your flashes of inspiration. Writing down these momentary connections to the cosmos builds a constructive narrative. Your faith can lead to a vision of a higher purpose. Imagining the improbable opens the door to creative ingenuity.", "Your effortless conversations inspire quick responses. Where you lay your head at night could be the topic of discussion. Whether it’s about a relationship repair or a home improvement, you’re guided by several voices today. Separate talk from deeds. People chat up a promising string of ideas, but few may act. Feel free to make the first move; waiting for something to happen is not your thing. Your strength of conviction can arouse others to support your cause. Leadership is a noble calling.", "Every talk is therapeutic if you are willing to listen with an open mind. Moods can be problematic for everyone else, but your positive focus lifts you above any emotional drama today. The best questions to ask are those that glean the most information. Get to the point. Romantics will daydream and wander off topic. Avoid criticism by firmly nudging others back on task with a kind word. Simple enlightenment works wonders -- just remind people why their contributions matter. ", "Your values determine your motivation. Making a stronger effort to explain your plans wins the day. However, words from others, especially those involved, can become lost in the shuffle of events. Discouragement occurs from time to time and the fastest way to cure the blues is to find another person who agrees with your agenda. Nevertheless, creating a sense of community needs to be about more than commiseration. A common purpose unites like-minded allies. Sharing authority invites higher morale and greater progress. ", "Art draws inspiration closer to your heart. Translate the feelings of those you love into creative expression. Whether you are just chatting about an issue on your mind or sharing a deeper truth, you might discover a different way to strategize solutions. Leave your discomfort or shyness behind. Chance something new and paint your own masterpiece. Those that know you welcome your bright originality and compassionate spirit. Unleash your creativity and color your world. ", "Tapping into your dreams breathes new life into the day. Even if you do not remember what occurred in your subconscious, any intuitive insights can be integrated without logical intervention. Sensitive times require an adjustment between how you feel and the personal changes you hope to make. In other words, acknowledge your emotional side and validate your heart. Schedule time to plan for the future. There is no reason to suppress your all-powerful fantasies when they are a rich source of potential possibilities. Turn your vision into your destiny. ", "Spread your good deeds thoughtfully among the people in your life. No matter how many folks you encounter today, the personal dynamics need not be confusing. Thankfully, not everyone requires the same amount of your energy or time. Conserving your resources is prudent since you pick up on the smallest of details without even trying. The key is to parse out time like money. Give when you have extra and budget when there is less. Value what you have to offer and others will do the same. You do not have to be rich to be generous. ", "Accolades are surprisingly easy to accumulate today. Your powerful charisma produces unrealistic expectations as others ask you to make decisions for them. This is not an ideal position to be in, but it might work to your advantage if you think quickly on your feet. If you can answer a question with another question, life goes into a mutually beneficial direction now. The trick is to realize when you’re assuming the therapist’s role. Pause, rewind, and play back certain requests. Your words are magically musical when they come from the heart. ", "You may feel as if you’re a bundle of raw emotions today, waiting for something to happen. The truth is your intensity is cranked up high; your perceptions are keen and there is little that slips under your psychic radar now. But you must be careful about leaning on logic to justify your conclusions because your fantasies are also running rampant. Nearly anything you imagine seems real, making it easy to convince yourself and others of your infallibility. Take your incredible ideas with a grain of salt.", "Complications are often the universe’s way to nudge you to ask for help. Although time may feel short today, you can handle the stress with grace and humor. People often try to list everything they want to do, without realizing how long it will take to execute it all in reality. Encourage others to jot reminders down on paper, and everyone will live more peacefully. Add an hour to any delivery estimates and give yourself plenty of breathing room, too. Avoid blaming the holidays and all will go better than expected. Counting your blessings keeps your focus where it matters. ", "Deeply intense experiences captivate your attention today. Pleasure-seeking Venus conspires with shadowy Pluto in your sign, leading you to places in life previously unexplored. From an unexpected conversation to an awkward déjà vu, reaching beyond the norm is a high priority. If you consciously focus on doing things differently, the strange and weird will eventually surface. Stay in the moment and know that you can always figure out an interpretation later. ", "You Just played Yourself."];
var images = ["img/Aquarius.png","img/Pisces.png","img/Aries.png","img/Taurus.png","img/Gemini.png","img/Cancer.png","img/Leo.png","img/Virgo.png","img/Libra.png","img/Scorpio.png","img/Sagittarius.png","img/Capricorn.png","img/nou.png"];
var yearMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function onSubmit(){
    var personMonth = document.getElementById('Month').value;
    var personDay = document.getElementById('Day').value;
    var personName = document.getElementById('Name').value;
    var sign = determineSign(personMonth,personDay);
    //var bday = determineBirthday(p,m);

    document.getElementById("signs").innerHTML = signs[sign];
    document.getElementById("message").innerHTML = personName +", "+  messages[sign];
    document.getElementById("image").src = images[sign];

}

//document.getElementById("img").src = images[sign]

function determineSign(personMonth,personDay){

         if((personDay >= 29 && personMonth == 1) || (personDay == 31 && personMonth == 3) || (personDay == 31 && personMonth == 5) || (personDay == 31 && personMonth == 8) || (personDay == 31 && personMonth == 10)){
        return 12;
        }

        if((personDay >= 20 && personMonth == 0) || (personDay <= 18 && personMonth == 1)){
            //document.getElementById("signs").value = 0;
            return 0;
        }

        if((personDay >= 19 && personMonth == 1) || (personDay <= 20 && personMonth == 2)){

            return 1;
        }


        if((personDay >= 21 && personMonth == 2) || (personDay <= 19 && personMonth == 3)){
            return 2;
        }


        if((personDay >= 20 && personMonth == 3) || (personDay <= 20 && personMonth == 4)){
            return 3;
        }


        if((personDay >= 21 && personMonth == 4) || (personDay <= 20 && personMonth == 5)){
            return 4;
        }


        if((personDay >= 21 && personMonth == 5) || (personDay <= 22 && personMonth == 6)){
            return 5;
        }


        if((personDay >= 23 && personMonth == 6) || (personDay <= 22 && personMonth == 7)){
            return 6;
        }


        if((personDay >= 23 && personMonth == 7) || (personDay <= 22 && personMonth == 8)){
            return 7;
        }


        if((personDay >= 23 && personMonth == 8) || (personDay <= 22 && personMonth == 9)){
            return 8;
        }


        if((personDay >= 23 && personMonth == 9) || (personDay <= 21 && personMonth == 10)){
            return 9;
        }


        if((personDay >= 22 && personMonth == 10) || (personDay <= 21 && personMonth == 11)){
            return 10;
        }


        if((personDay >= 22 && personMonth == 11) || (personDay <= 19 && personMonth == 0)){
            return 11;
        }




}

function determineMessage(sign){
    if(sign == "Aquarius"){
        return message[0];
    }
    if(sign == "Pisces"){
        return message[1];
    }
    if(sign == "Aries"){
        return message[2];
    }
    if(sign == "Taurus"){
        return message[3];
    }
    if(sign == "Gemimi"){
        return message[4];
    }
    if(sign == "Cancer"){
        return message[5];
    }
    if(sign == "Leo"){
        return message[6];
    }
    if(sign == "Virgo"){
        return message[7];
    }
    if(sign == "Libra"){
        return message[8];
    }
    if(sign == "Scorpio"){
        return message[9];
    }
    if(sign == "Sagittarius"){
        return message[10];
    }
    if(sign == "Capricorn"){
        return message[11];
    }
}

function determineBirthday(){
    lol
}