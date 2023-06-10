// 1.আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 

// using while loop
var i=0;
while(i<39)
{
    // console.log( "ajke amar mon valo nei");
    i++;
};

// using for loop

for(var i=0;i<39;i++){
    // console.log("ajke amar mon valo nei");
}

// 2.একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 

for( var i=58;i>=58 && i<=98;i++){
    // console.log(i);
}

// 3.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  

for(var i=412;i>=412 && i<=456;i=i+2){
    // console.log(i);
}

// 4.একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 

for(var i=581;i>=581 && i<=623;i=i+2){
    // console.log(i);
}

// 5.তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

var course = ["html", "html3", "css", "css3", "js", "bootstrap", "tailwind"];
for(var i=0;i<7;i++){
     var courseName = course[i];
    // console.log(courseName);
};

// 6.তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

var mobile=["oppo", "poco", "nokia", "real me", "xawmi", "x3pro", "a3s"];
var i=0;
while(i<7)
{
    mobilrName=mobile[i]
    // console.log(mobilrName);
    i++;
};

// 7. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 

for(var i=30;i>=30 && i<=86;i++){
    
    if(i==44){
        break;
    };
    // console.log(i);
}
