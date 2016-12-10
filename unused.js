<input type="file" id="fileinput" />
<script>
  function readSingleFile(evt) {
    var f = evt.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
          var contents = e.target.result;
          console.log(contents);
     }
      r.readAsText(f);
      console.log(output);
    } else { 
      alert("Failed to load file");
    }
  }
  document.getElementById('fileinput').addEventListener('change', readSingleFile);
</script>

console.log('data:text/html,' + encodeURIComponent(html)) //now used


swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
}, function() {
    console.log(1)
});