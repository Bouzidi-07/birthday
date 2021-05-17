$("form").on("submit", function (e) {
  e.preventDefault()
  $("main").append(`
    <div class="card">
      <div class="card-body">
      <span style="color: ${$(
        "input:eq(2)"
      ).val()}">${$("input:eq(1)").val()}</span> - Le ${$("input:first").val()}
      </div>
    </div>
  `)
})

$("button:last").on("click", function () {
  $("input:first").val("")
  $("input:last").val("")
})
