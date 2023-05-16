import React from 'react'

export default function FooterTrials() {
  return (

	// 1 =>  Simple 
        // <div className="mx-4 mt-5">
        //     <h5> <span style={{color: "blue"}}>Made by</span> <a style= {{color: "#FE914F"}} href="https://akshata-ganbote.netlify.app/">Akshata Ganbote </a></h5>
        //     {/* #FE914F */}
        // </div>


	// 2 => Horizontal Grid

	// <div className= "d-flex footer" style={{padding: "20px 0px", backgroundColor : "rgb(239,239,239)"}}>
    //     <div class="container">
    //         <div class="row my-1">
    //             <div class="col-md " >
    //             <h4>
    //                 Made with ❤️ by <a href="https://akshata-ganbote.netlify.app/" style={{textDecoration : "none"}}>Akshata Ganbote</a>
    //             </h4>
    //             </div>
                
    //             <div class="col-md" >
    //             <div class="text-center text-lg-end">
    //             <a href="https://www.linkedin.com/in/akshata-ganbote-7a3847247/" target="_blank" rel="noreferrer">
    //                     <i class="bi bi-linkedin mx-2" style={{fontSize : "25px"}}></i>
    //                 </a>
                    
    //                 <a href="https://akshata-ganbote.netlify.app/"  target="_blank" rel="noreferrer">
    //                     <i class="bi bi-globe mx-2" style={{fontSize : "25px"}}></i>
    //                 </a>

    //                 <a href="https://github.com/AkshataGanbote" target="_blank" rel="noreferrer">
    //                     <i class="bi bi-github mx-2" style={{fontSize : "25px"}}></i>
    //                 </a>

                    

    //                 <a href="mailto:akshataganbote61843@gmail.com" target="_blank" rel="noreferrer">
    //                     <i class="bi bi-envelope-fill mx-2" style={{fontSize : "26px"}}></i>
    //                 </a>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     </div>

        <div className= "d-flex footer" style={{padding: "50px 0px", backgroundColor : "rgb(239,239,239)"}}>
            <div className="container">
                <div class="row mb-5">
                    {/* Left Section */}
                    <div class="col-md">
                        <div class="mb-4">
                            <h2 class="ftco-heading-2 centre_text">Reach out to me here 👇</h2>
                            <p class="text">Feel free to ping me for volunteering, discussing your ideas or grabbing a cup of coffee.
						    </p>
                            <ul class="list-group list-group-horizontal">
                                <li class="list-group mx-3"> 
                                    <a href="https://www.linkedin.com/in/sonu-sourav-37b459149/" class="list-group list-group-action">
                                        <i className="bi bi-globe" style={{fontSize : "30px"}}></i>
                                    </a>
                                </li>
                                <li class="list-group mx-3"> 
                                    <a href="https://www.linkedin.com/in/sonu-sourav-37b459149/" class="list-group list-group-action">
                                        <i class="bi bi-github" style={{fontSize : "30px"}}></i>
                                    </a>
                                </li>
                                <li class="list-group mx-3"> 
                                    <a href="https://www.linkedin.com/in/sonu-sourav-37b459149/" class="list-group list-group-action">
                                        <i class="bi bi-linkedin" style={{fontSize : "30px"}}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div class="col-md">
                        <h2 class="ftco-heading-2 centre_text">Reach out to me here 👇</h2>
                    </div>


                </div>
            </div>
            {/* <div class="container">
			<div class="row mb-5">
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2 centre_text">Reach out to me here 👇</h2>
						<p class="">
							Feel free to ping me for volunteering, discussing your ideas or
							grabbing a cup of coffee.
						</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5 centre_text">
							<li class="ftco-animate fadeInUp ftco-animated">
								<a href="https://www.linkedin.com/in/sonu-sourav-37b459149/"><span class="icon-linkedin"></span></a>
							</li>
							<li class="ftco-animate fadeInUp ftco-animated">
								<a href="https://github.com/sonusourav"><span class="icon-github"></span></a>
							</li>
							<li class="ftco-animate fadeInUp ftco-animated">
								<a href="https://www.facebook.com/sonusouravdx"><span class="icon-facebook"></span></a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md">
					<div class="ftco-footer-widget mb-4">
						<h2 class="ftco-heading-2 centre_text">Have a Question?</h2>
						<div class="block-23 mb-3">
							<ul>
								<li>
									<span class="icon icon-map-marker"></span><span class="text">#11, 7th Block, 1st
										Main, 1st Cross, Kormangala,
										Bangalore, Karnataka, India PIN: 560095</span>
								</li>
								<li>
									<a href="https://www.skype.com/en/"><span class="icon icon-phone"></span><span class="text">+91 9916228725</span></a>
								</li>
								<li>
									<a href="https://www.skype.com/en/"><span class="icon icon-skype"></span><span class="text">sonusouravdx001</span></a>
								</li>
								<li>
									<a href="#"><span class="icon icon-envelope"></span><span class="text">sonusouravdx001@gmail.com</span></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 class="ftco-heading-2" style="text-align: center; color: white">
					Made with ❤️ by <b>Sonu Sourav</b>
				</h2>
			</div>
		    </div> */}
        </div>
  )
}
