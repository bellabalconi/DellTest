//Transform the icons' row into 2 rows and make it occupy only the left half of the page container
//Move the "TechDirect" and "MyService360" boxes to the remaining right half of the container;
//Delete the "Dell EMC Support Technologies" section (where those boxes were initially).

document.getElementById('divResourceLinks').innerHTML=
`<div class="container">
    <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <a class="card linked-card match-height text-decoration-none" href="//www.dell.com/support/home/en-us?app=licenses" style="height: 144px;">
                    <div class="d-none d-block card-body text-center"><img class="dti dti-xxl mb-2 pointer-events-none" src="https://www.dellcdn.com/support/staticcdn/core/svg/dtsrc/book-open.svg" type="image/svg+xml"><span class="d-block text-decoration-none text-carbon">Software Licenses</span></div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <a class="card linked-card match-height text-decoration-none" href="//www.dell.com/support/home/en-us?app=warranty" style="height: 144px;">
                    <div class="d-none d-block card-body text-center"><img class="dti dti-xxl mb-2 pointer-events-none" src="https://www.dellcdn.com/support/staticcdn/core/svg/dtsrc/shield.svg" type="image/svg+xml"><span class="d-block text-decoration-none text-carbon">Warranty &amp; Contracts</span></div>
                </a>
            </div>
	</div>	
 

	<div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <a class="card linked-card match-height text-decoration-none" href="//www.dell.com/support/home/en-us?app=drivers" style="height: 144px;">
                    <div class="d-none d-block card-body text-center"><img class="dti dti-xxl mb-2 pointer-events-none" src="https://www.dellcdn.com/support/staticcdn/core/svg/dtsrc/gear.svg" type="image/svg+xml"><span class="d-block text-decoration-none text-carbon">Drivers &amp; Downloads</span></div>
                </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <a class="card linked-card match-height text-decoration-none" href="//www.dell.com/support/home/en-us/quicktest" style="height: 144px;">
                    <div class="d-none d-block card-body text-center"><img class="dti dti-xxl mb-2 pointer-events-none" src="https://www.dellcdn.com/support/staticcdn/core/svg/dtsrc/diagnostic.svg" type="image/svg+xml"><span class="d-block text-decoration-none text-carbon">Diagnostics &amp; Tools</span></div>
                </a>
            </div>
	</div>
    </div>`

    document.getElementById("divEnterpriseProductLinks").style.width = "50%";
    document.getElementById("divEnterpriseProductLinks").style.float = "right";
    let element = document.getElementsByClassName("pb-md-14")
    $(element).removeClass("row")

    let element2 = document.getElementsByClassName("mb-5")
    $(element2).removeClass("col-md-6")

    let title = document.getElementsByClassName("mt-md-10")
    $(title).remove()

    //sorry, I tried =/