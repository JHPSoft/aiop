    function saveText() {
      var msg = document.getElementById("txtBox");
        localStorage.setItem("memo", msg.value);
    }
    function pageload() {
        var msg = document.getElementById("txtBox");
        msg.value = localStorage.getItem("memo");
    }
    function clr() {
      var msg = document.getElementById("txtBox");
        msg.value = "";
        localStorage.clear();
    }