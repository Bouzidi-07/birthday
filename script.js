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

$("form").on("submit", function (e) {
  e.preventDefault()
  var newBirthday = {
    firstname: $("input:eq(1)").val(),
    date: $("input:first").val(),
    color: $("input:last").val(),
  }

  var list = JSON.parse(localStorage.getItem("anniversaires"))
  if (!list) {
    localStorage.setItem("anniversaires", JSON.stringify([newBirthday]))
    refresh()
  } else {
    list.push(newBirthday)
    localStorage.setItem("anniversaires", JSON.stringify(list))
    refresh()
  }
})

$("button:last").on("click", function () {
  $("input:first").val("")
  $("input:last").val("")
})
