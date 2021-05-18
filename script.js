function refresh() {
  $("section").html("")
  var list = JSON.parse(localStorage.getItem("anniversaires"))
  if (list) {
    for (var i = 0; i < list.length; i++) {
      $("section").append(`
        <div class="card mb-3">
          <div class="card-body">
            <span style="color: ${list[i].color}">${list[i].firstname}</span> - Le  ${list[i].date}
          </div>
        </div>
      `)
    }
  }
}

refresh()
// No bug
$("form").on("submit", function (e) {
  $("section").append(`<div class="alert alert-primary" role="alert">
  Ceci est un bug
</div>`)
})

$("button:last").on("click", function () {
  $("input:first").val("")
  $("input:last").val("")
})
