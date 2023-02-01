setInterval(function() {
	var element = document.getElementById("mG61Hd");
	if (element) {
	  element.remove();
	  document.write("hello");
	}
  }, 500);


const container = document.getElementById('dialog-container');
		var bg_op=document.querySelector(".bg").style;
        const CustomAlert = new function(msg) {
            this.show = function(msg) {
                let content = document.getElementById('dialog-body');
                container.style.opacity = 1;
                content.textContent = msg;
				var hh = document.getElementById("select").value=='III'?'99%':'140%'
				container.style.top = hh;
				bg_op.opacity='30%';
            }

            this.close = function() {
				bg_op.opacity='100%';
                container.style.top = '-30%';
                container.style.opacity = 0;
            }
        }

		function handle(src) {
			// alert("Please join in the whatsapp group to get quick update about the event");
			CustomAlert.show('Please join in the whatsapp group to get quick update about the event');
			}