$("form").on("submit", function (e) {
  e.preventDefault()
  $("main").append(`
    <div class="card">
      <div class="card-body">
        ${$("input:last").val()} - Le  ${$("input:first").val()}
      </div>
    </div>
  `)
})

$("button:last").on("click", function () {
  $("input:first").val("")
  $("input:last").val("")
})
