require "import"
import "androidx.appcompat.app.*"
import "androidx.appcompat.view.*"
import "androidx.appcompat.widget.*"

LoadImportBase = function()
    import "android.app.*"
    import "android.os.*"
    import 'android.view.*'
    -- 窗口
    import 'android.widget.*'
    import 'android.widget.LinearLayout'
    import 'android.widget.ImageView'
    import 'android.widget.Space'
    -- 上下文
    import 'android.content.Intent'
    import "android.content.Context"
    -- 设计
    import 'android.graphics.*'
    import "android.graphics.RectF"
    import "android.graphics.Paint"
    import 'android.graphics.Typeface'
    import "android.graphics.drawable.Drawable"
    import 'android.graphics.drawable.ClipDrawable'
    import 'android.graphics.drawable.LayerDrawable'
    import "android.graphics.drawable.ShapeDrawable"
    import "android.graphics.drawable.ColorDrawable"
    import "android.graphics.drawable.GradientDrawable"
    import 'android.graphics.drawable.StateListDrawable'
    import "android.graphics.drawable.shapes.RoundRectShape"
    -- 文本输入
    import 'android.text.InputType'
    import "android.text.Spannable"
    import "android.text.SpannableString"
    import "android.text.style.ForegroundColorSpan"
    import "android.graphics.PixelFormat"
    import "android.content.Context"
    import "android.provider.Settings"
    import "android.animation.ObjectAnimator"
    import "android.animation.ArgbEvaluator"
    -- 第三方库
    tryImport(
        "EMUIStyle",
        "androidx.coordinatorlayout.widget.CoordinatorLayout",
        "com.google.android.material.card.MaterialCardView",
        "com.google.android.material.button.MaterialButton"
    )
    tryImport = function(...)
        local libs = ... or {}

        for _, lib in ipairs(libs) do
            table.insert(_G, import(lib))
        end
    end
end

LoadImportBase()
