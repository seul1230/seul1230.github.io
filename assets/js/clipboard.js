$(".page__content")
      .find("h1, h2")
      .each(function () {
        var id = $(this).attr("id");
        if (id) {
          var anchor = document.createElement("a");
          var addr = location.origin + location.pathname + "#" + id;
          anchor.className = "header-link";
          anchor.href = "#" + id;
          // sammy baek custom
          anchor.innerHTML = `<span class=\"sr-only\">${addr}</span><i class=\"fas fa-link\"></i>`;
          anchor.title = "Copy this URL";
          anchor.setAttribute("data-clipboard-text", addr);
          $(this).append(anchor);
        }
      });

    $(function () {
      var clipboard = new ClipboardJS(".header-link");
      clipboard.on("success", function (e) {
        // simpleNotice.show('URL을 클립보드에 복사하였습니다.');
        const Toast = Swal.mixin({
          toast: true,
          iconColor: "#007bff",
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "URL copy success",
        });
        // console.info('Text:' , e.text)
        e.clearSelection();
      });
      // clipboard.on('error', function(e) {
      // });
      var clipboardShareOn = new ClipboardJS("#shareon-clipboard");
      clipboardShareOn.on("success", function (e) {
        // simpleNotice.show('URL을 클립보드에 복사하였습니다.');
        e.clearSelection();
      });
    });