function multipleDel(e){var t=$(e),a=t.closest(".item"),i=t.data("select"),s=a.find(".name").text();a.remove(),$(i).find("option:selected").each(function(){$(this).val()==s&&$(this).prop("selected",!1)}),$(i).trigger("change")}$(function(){"use strict";function e(e){var t=e,a=t.attr("id"),i=t.attr("class"),s=t.attr("src");jQuery.get(s,function(e){var s=jQuery(e).find("svg");"undefined"!=typeof a&&(s=s.attr("id",a)),"undefined"!=typeof i&&(s=s.attr("class",i+" replaced-svg")),s=s.removeAttr("xmlns:a"),t.replaceWith(s)},"xml")}function t(){jQuery("img.svg").each(function(t){e($(this))}),$(".select").each(function(){function e(e){var t=$(e),a=t.parent().find(".filter-option-inner-inner"),i=a.text(),s=t.data("multiple-placeholder"),n=a.text().split(", ").length;void 0==s&&(s="Item selected"),t.attr("multiple")&&(n>1?a.text(s+" ("+n+")"):a.text(i))}$(this).selectpicker({size:4,width:"100%"}),$(this).on("changed.bs.select",function(){var t=$(this);e(t)}),$(this).on("refreshed.bs.select",function(){var t=$(this);e(t)})}),setTimeout(a(),200)}function a(){function e(e){function t(){$(".bulk-true"),$(".bulk-false");s.find('input[type="checkbox"]:checked').length>0?(i.find('input[type="checkbox"]').prop("checked",!0),$(".bulk-false").collapse("hide"),$(".bulk-true").collapse("show")):(i.find('input[type="checkbox"]').prop("checked",!1),$(".bulk-false").collapse("show"),$(".bulk-true").collapse("hide")),s.find('input[type="checkbox"]:checked').length==s.length?(i.find(".custom-control").removeClass("custom-checkbox-alt"),i.find(".custom-control").addClass("custom-checkbox")):(i.find(".custom-control").addClass("custom-checkbox-alt"),i.find(".custom-control").removeClass("custom-checkbox"))}var a=$(e),i=a.find(".check-all"),s=a.find(".has-check");t(),i.each(function(){var e=$(this),a=e.find('input[type="checkbox"]');a.click(function(){s.find('input[type="checkbox"]').prop("checked",this.checked),i.find(".custom-control").removeClass("custom-checkbox-alt"),i.find(".custom-control").addClass("custom-checkbox"),t()})}),s.each(function(){var e=$(this),a=e.find('input[type="checkbox"]');a.click(function(){t()})})}$(".table").each(function(){var t=$(this);t.find(".check-all").length>0&&e(t)}),$(".form-steps").each(function(){function e(e){var a=e;""!==a.val()&&0!==a.val().length?a.addClass("valid"):a.removeClass("valid"),t()}function t(){s.find(".form-steps__item").each(function(){var e=$(this),t=e.find(".valid"),a=e.find("[required]"),i=e.find(".btn--submit");t.length>=a.length?(i.removeClass("disabled"),i.removeAttr("disabled"),console.log("all valid, valid: "+t.length+", req: "+a.length)):(i.addClass("disabled"),i.attr("disabled","disabled"),console.log("not valid, valid: "+t.length+", req: "+a.length))})}function a(e){var t=e,a=s.find(".form-steps__item.active"),i=$(n).find(".stepper__item.active");a.addClass("fade-up--out"),i.removeClass("active"),$(n).find(".stepper__item[data-step='"+t+"']").addClass("active"),s.find(".form-steps__item[data-step='"+t+"']").addClass("fade-up--in"),setTimeout(function(){a.removeClass("active"),a.removeClass("fade-up--out"),s.find(".form-steps__item[data-step='"+t+"']").removeClass("fade-up--in"),s.find(".form-steps__item[data-step='"+t+"']").addClass("active")},100)}function i(e){var t=e,a=s.find(".form-steps__item.active"),i=$(n).find(".stepper__item.active");a.addClass("fade-down--out"),i.removeClass("active"),$(n).find(".stepper__item[data-step='"+t+"']").addClass("active"),s.find(".form-steps__item[data-step='"+t+"']").addClass("fade-down--in"),setTimeout(function(){a.removeClass("active"),a.removeClass("fade-down--out"),s.find(".form-steps__item[data-step='"+t+"']").removeClass("fade-down--in"),s.find(".form-steps__item[data-step='"+t+"']").addClass("active")},100)}var s=$(this),n=s.data("nav"),c=(s.find(".form-steps__item"),s.find(".btn--next")),d=s.find(".btn--prev");t(),s.css("min-height",$(window).height()-s.offset().top-$("header").height()),s.find("input[required]").each(function(){var t=$(this);t.keyup(function(){e(t)})}),s.find("select[required]").each(function(){var t=$(this);t.change(function(){e(t)})}),s.find("textarea[required]").each(function(){var t=$(this);t.keyup(function(){e(t)})}),c.each(function(){var e=$(this),i=e.data("step");e.click(function(){""!==i&&void 0!==i&&(a(i),t())})}),d.each(function(){var e=$(this),a=e.data("step");e.click(function(){""!==a&&void 0!==a&&(i(a),t())})}),$(n).each(function(){var e=$(this),t=e.find(".stepper__item"),i=e.data("anchor");1==i&&(t.css("cursor","pointer"),t.each(function(){var e=$(this),t=e.data("step");e.click(function(){""!==t&&void 0!==t&&a(t)})}))})}),$("select.has-tag").each(function(){var e=$(this),t=e.data("target");e.change(function(){$(t).find(".item:not(.item--template)").remove(),e.find("option:selected").each(function(){var e=$(t).find(".item.item--template").clone().removeClass("item--template");if($(this).length){var a=$(this).val(),i=$(this).data("title"),s=$(this).data("dept");e.find(".name").text(a),e.find(".title").text(i),e.find(".dept").text(s),$(t).find(".selected-multiple__wrap").append(e)}}),e.find("option:selected").length>0?$(t).addClass("show"):$(t).removeClass("show")})}),$(".select-contact-group").each(function(){var e=$(this),t=e.data("target");e.change(function(){$(t).removeClass("show"),$(t).addClass("show")})}),$("#emailField").summernote({toolbar:[["style",["style"]],["font",["bold","italic","underline"]],["insert",["link"]]],placeholder:"Text",disableResizeEditor:!0,disableDragAndDrop:!0,linkTargetBlank:!0}),$(".datepicker").each(function(){var e=$(this);e.find("input").datepicker({format:"dd M yyyy",todayHighlight:!0,autoclose:!0})}),$(".reserv").each(function(){var e=$(this),t=e.find("#selectDokter");t.val();$(t).on("change",function(){console.log($(this).val());var t=$(this).val();return"1"==t?(e.find("#ak").removeClass("collapse"),e.find("#am").addClass("collapse"),e.find("#ab").addClass("collapse")):"2"==t?(e.find("#ak").addClass("collapse"),e.find("#ab").addClass("collapse"),e.find("#am").removeClass("collapse")):"3"==t?(e.find("#ak").addClass("collapse"),e.find("#am").addClass("collapse"),e.find("#ab").removeClass("collapse")):(e.find("#ak").addClass("collapse"),e.find("#am").addClass("collapse"),e.find("#ab").addClass("collapse")),!1})})}t()});