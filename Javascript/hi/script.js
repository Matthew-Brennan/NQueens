function questions(cbID, divID)
{

    var cb = document.getElementById(cbID);
    var div = document.getElementById(divID);

    if(cb.checked == true)
    {
        div.style.display="block";
        div.style.visibility="visible";

    }
    else
    {
        div.style.display="none";
        div.style.visibility="hidden";
    }
}

function imbeddedCheckBox(id)
{
  var mainCB = document.getElementById(id);
  console.log(mainCB)
  console.log(mainCB.children)

  if(mainCB.checked == true)
    {
        mainCB.children.style.display="block";
    }
    else
    {
      mainCB.children.style.display="none";
    }
}

function printForm(id)
{
  var mainDiv = document.getElementById(id);
  var children = mainDiv.children
  var text = ""
  

  //add title
  text += `JOB SITE: ${document.getElementById("jobsiteID").value}\n`
  text += `ATTENDENCE: \n ${document.getElementById("attendenceID").value}\n`
  text += '----------------------------------\n\n'
  for(let x of Array.from(mainDiv.children))
  {
    if(x.style.display == "block")
    {
      //add header
      text += `#### ${x.id} #### \n`
      text += '----------------------------------\n'

      //loop through div adding text from paragraphs and text boxes
      for(let y of Array.from(x.children))
      {
        //if the node is a text box take the value from the text box
        text += (y.nodeName == "TEXTAREA") ? y.value + '\n\n' : y.textContent + '\n';
      }
      text += '----------------------------------\n\n'
    }
    
  }
  console.log(text)
  // add text to a hidden paragraph form the download
  document.getElementById('hiddenP').innerHTML = text;
}

//from https://www.thecodehubs.com/generate-text-file-using-plain-javascript/#:~:text=Here%2C%20we%20will%20learn%20about,user%20from%20the%20JavaScript%20code.
function writeToFile(text){
    var textFile = null;
    var data = new Blob([text], {type: 'text/plain'}); 

    if (textFile !== null) {  
      window.URL.revokeObjectURL(textFile);  
    }  

    textFile = window.URL.createObjectURL(data);  

    return textFile; 
  }

  (function () {  
    var btnCreateFile = document.getElementById('generateForm'),  
    HVACInfo = document.getElementById('hiddenText');  
    btnCreateFile.addEventListener('click', function () {
      var link = document.getElementById('downloadFile');  
      link.href = writeToFile(HVACInfo.innerText);  
      link.style.display = 'inline-block';  
    }, false);
  })();
  

