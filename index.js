(function(){
    const main = document.querySelector('main');
    const home = 
    `
    <div class="flex flex-justify-around">
    <img src="img/jumbo.jpg" alt="Jumbotron Image">
  </div>
<div class="flex flex-justify-between">
  <div>
    <h2 class="u-margin-bottom-sm">The Future</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi corporis pariatur modi? Animi numquam
      dolor quos modi dicta! Cumque, dolore quidem. Dolorum explicabo natus alias perspiciatis eum quas porro?</p>
  </div>
  <div>
    <h2 class="u-margin-bottom-sm">The Past</h2>
    <p>Omnis maxime magnam laudantium neque. Minus, temporibus. Laborum beatae officiis soluta necessitatibus dolorum.
      Id, repellendus maiores voluptatem quaerat totam consectetur, obcaecati dolore earum aspernatur a modi eveniet
      ipsum adipisci impedit.</p>
  </div>
</div>
<hr>
<h2 class="block">Why Did It Have To Be Boxes...</h2>
<div class="flex flex-wrap flex-justify-around flex-row flex-no-respond">
  <div class="box box-1">Box 1</div>
  <div class="box box-2">Box 2</div>
  <div class="box box-3">Box 3</div>
  <div class="box box-4">Box 4</div>
  <div class="box box-5">Box 5</div>
  <div class="box box-6">Box 6</div>
  <div class="box box-7">Box 7</div>
  <div class="box box-8">Box 8</div>
  <div class="box box-9">Box 9</div>
  <div class="box box-10">Box 10</div>
</div>
<hr>
<div class="flex flex-justify-around">
  <div>
    <h3 class="u-margin-bottom-sm">That's</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laudantium quaerat doloremque quis, est
      velit soluta eligendi magnam nam rem voluptates? Ducimus, asperiores saepe? Facilis dolore veniam consequuntur
      obcaecati? Perferendis?</p>
  </div>
  <div>
    <h3 class="u-margin-bottom-sm">No</h3>
    <p>Asperiores vitae molestias incidunt provident velit, facere expedita iusto culpa non perferendis quod dolorum
      laboriosam. Atque nam itaque recusandae perferendis, dolore esse, veritatis necessitatibus voluptas labore
      repudiandae voluptatum accusantium! Corrupti.</p>
  </div>
  <div>
    <h3 class="u-margin-bottom-sm">Moon</h3>
    <p>Voluptatem itaque consequuntur reiciendis nulla odio inventore voluptate voluptas, modi mollitia dolore?
      Commodi, illo perferendis? Illum, nam commodi, consequatur impedit animi veritatis ratione possimus cumque
      dolore totam blanditiis in perferendis?</p>
  </div>
</div>
</div>
</div>
    `;
    const about = 
    `
    <div class="flex flex-justify-around">
    <img src="img/jumbo-about.png">
   </div>
 <div class="flex">
   <div>
     <h3>About</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium necessitatibus fugiat perferendis quis distinctio inventore quas reprehenderit excepturi? Dolor repellat pariatur, molestiae quidem consequuntur quis ab nam dignissimos cumque?</p>
   </div>
 </div>
 <hr>
 <div class="block flex flex-wrap flex-justify-between">
   <article>
     <img src="/img/about-plan.png" alt="Working with a wireframe">
     <h3>Strategy</h3>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ipsam odio similique sit expedita hic at repellat delectus quia vitae eos, aut, quidem earum, velit suscipit eaque quas quis consectetur.</p>
     <button>Learn More</button>
     <hr>
   </article>
   <article>
     <img src="/img/about-working.png" alt="A lady working in a beautiful office">
     <h3>How We Work</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quo deleniti aspernatur nihil praesentium incidunt consequuntur minus soluta eius laborum quaerat sequi molestiae eum quam, voluptates, quidem expedita vero dolorum.</p>
     <button>Learn More</button>
     <hr>
   </article>
   <article>
     <img src="img/about-office.png" alt="A picture of a cool office">
     <h3>Places We Work</h3>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aut dolores, dolor quo blanditiis ab magnam nemo ipsam corrupti ducimus temporibus veritatis, nulla dolorum iure eos, nostrum eveniet consectetur ipsa?</p>
     <button>Learn More</button>
     <hr>
   </article>
   <article>
     <img src="img/about-meeting.png" alt="A few people having a meeting">
     <h3>Collaboration</h3>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ipsa impedit sint, eius temporibus corrupti pariatur libero iure voluptatem quidem vitae deleniti commodi reiciendis praesentium est magni, neque facere? Officia.</p>
     <button>Learn More</button>
     <hr>
   </article>
 </div>
 <div class="block">
   <h3>Let's Work Together</h3>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum reprehenderit a, ea eaque deleniti cupiditate laborum molestiae autem, rem alias sint. Laboriosam beatae vero voluptas omnis adipisci, delectus quidem. Ratione.</p>
 </div>`;
    let links = document.querySelectorAll('header nav ul li a');
    let fLinks = document.querySelectorAll('footer nav ul li a');

    links[1].href = `#`;
    links[2].href = `#`;
    fLinks[0].href = `#`;
    fLinks[1].href = `#`;

    let aboutBtn = links[2]; homeBtn = links[1];
    let fAboutBtn = fLinks[2]; fHomeBtn = fLinks[1];

    aboutBtn.addEventListener('click',function() {
        main.innerHTML = about;
    });

    homeBtn.addEventListener('click',function() {
        main.innerHTML = home;
    });

    fAboutBtn.addEventListener('click',function() {
        main.innerHTML = about;
    });

    fHomeBtn.addEventListener('click',function() {
        main.innerHTML = home;
    });


    
})();