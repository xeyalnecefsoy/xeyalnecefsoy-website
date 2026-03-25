# AI Prompt Recipes (Layihə Prosesi)

Bu sənəd runtime-da AI çağırışı etmədən, sadəcə komandamızın iş prosesini sürətləndirmək üçün istifadə etdiyimiz prompt “reseptlərini” toplayır.

Məqsəd:
- UI/UX, kod keyfiyyəti və content üçün təkrar istifadə edilən prompt şablonları
- “Nə istəyirik?” sualını AI-ə daha düzgün ötürmək
- Riskləri (məs. dizayn regressiyası, routelərin qırılması) vaxtında tutmaq

Qeyd: Prompt-larda şəxsi məlumatlar və ya prod mühitinə aid secret-ları paylaşmayın.

---

## 1) UI/Design Review Prompt (Premium Dark + Glass)

**İstifadə et:** komponentin “premium” görünüşünü artırmaq, kəskin ayrılma, kontrast, hover/focus problemlərini düzəltmək.

**Şablon:**
```text
Context:
- Sayt: Next.js + Tailwind
- Üslub hədəfi: dark + glass + glow (mavi brand + bənövşəyi accent hibrid)

Vəzifə:
- Aşağıdakı komponent/səhifədə vizual problemləri tap (məs. background kəskin ayrılır, accent “əlaqəsiz” görünür, hover animasiyası lazımsızdır).
- Dəyişiklik təklif et: konkret Tailwind class-ları və tokenlər (accent/boxShadow) ilə.

Məlumat:
- Fayl(lar): {path1}, {path2}
- Cari kod parçaları: {paste relevant snippet}

Çıxış formatı:
1) Severity (high/med/low) + səbəb
2) Təklif olunan dəyişikliklər (class/token səviyyəsində)
3) QA checklist (responsive, focus-visible, contrast)
```

---

## 2) Component Refactor Prompt (Primitives + Consistency)

**İstifadə et:** eyni UI dili üçün primitives yaradıb hər yerdə reuse etmək.

**Şablon:**
```text
Context:
- Layihədə UI prinsipləri (Section/Card/Glow) artıq var və yenilənib.

Vəzifə:
- Aşağıdakı UI hissələrini yeni primitives-lə uyğunlaşdır:
  - {list of components/pages}
- Təklif et:
  - Həmin primitives-lər üçün prop/API dəyişiklikləri lazımdırmı?
  - Duplicated class-ları necə minimuma endirək?

Məlumat:
- Fayllar: {paths}
- Hədəf: premium dark+glass vizual dili tam konsistent olsun.

Çıxış formatı:
1) PR üçün addım-addım plan
2) Həssas hissələr (regressiya riski olan yerlər)
```

---

## 3) Route Cleanup Prompt (Next.js App Router)

**İstifadə et:** artıq istifadə edilməyən public route-ları silərkən build qırılmasın.

**Şablon:**
```text
Context:
- Next.js App Router
- Admin istisna olmaqla müəyyən public route-ları silirik.

Vəzifə:
- Aşağıdakı route qruplarını silmə planını ver:
  - {routes to remove}
- Silmədən əvvəl yoxla:
  - Bu route-lara gedən Link-lər hardcoded haradadır?
  - Type safety və typedRoutes məsələləri varmı?
  - sitemap/metadata yenilənməlidirmi?

Çıxış formatı:
1) Silinəcək fayllar (konkret path-lar)
2) Qalan link/CTA-ların redirect planı (məs. mailto və ya başqa anchor)
3) Son QA: npm run build + manual page checks
```

---

## 4) Content Rewrite Prompt (Tone + Remove Placeholders)

**İstifadə et:** placeholder mətnləri silib real “story” qurmaq; “vision”da artıq konkret layihə adlarını minimum saxlamaq.

**Şablon:**
```text
Vəzifə:
- Aşağıdakı mətni yenidən yaz:
  - Placeholder olmadan
  - Voice: {AZ/EN}
  - Hədəf: premium və etibarlı ton

Input:
- Mətn: {paste}

Constraints:
- Konkret şirkət/layaqhə adlarını {minimum/none} saxla.
- 2-3 qısa paragraph və ya 1 uzun paragraph (seçimini de).

Çıxış:
- Yeni mətn
- Niyə bu versiya daha yaxşıdır (qısa)
```

---

## 5) Commit/PR Description Prompt (Nəticə yönümlü)

**İstifadə et:** dəyişiklikləri “niyə etdik?” fokusunda qısa təsvir etmək.

**Şablon:**
```text
Biz etdik:
- {bullets}

Vəzifə:
- PR title və body yaz:
  - Title: 1 cümlə
  - Body: 2-3 bullet + Test plan

Çıxış:
- Title
- PR description (markdown)
```

---

## AI ilə işləmə checklist (qısa)
- Prompt-a “Context + Goal + Constraints + Output format” daxil et.
- Kod/route dəyişikliklərində “build risklərini” AI-dən soruş.
- UI dəyişikliklərində `focus-visible`, responsive və kontrastı QA kimi əlavə et.
- Secret və şəxsi məlumat paylaşma.

