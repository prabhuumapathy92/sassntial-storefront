import MarketingDetailShell from "@modules/common/components/marketing-detail-shell"
import {
  BlogPost,
  companyItems,
} from "@modules/company/constants/company-items"

const BlogDetailTemplate = ({ post }: { post: BlogPost }) => {
  const blogItem = companyItems.find((item) => item.slug === "blog")
  const relatedPosts = (blogItem?.blogPosts ?? [])
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3)

  return (
    <MarketingDetailShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Company", href: "/company" },
        { label: "Blog", href: "/company/blog" },
        { label: post.title },
      ]}
      eyebrow={post.category}
      title={post.title}
      description={post.excerpt}
      actions={[
        { label: "Back To Blog", href: "/company/blog" },
        {
          label: "Contact Us",
          href: "/company/contact-us",
          variant: "secondary",
        },
      ]}
      heroNote={`${post.date} | ${post.readTime}`}
      heroImage={
        post.imageUrl
          ? {
              src: post.imageUrl,
              alt: post.title,
            }
          : undefined
      }
      proofTitle="PRACTICAL DELIVERY INSIGHTS"
      sectionEyebrow="Article Overview"
      sectionTitle="What This Article Covers"
      sectionIntro="The article body sits inside the same reusable shell, while the content remains specific to the selected post."
      featureCards={post.body.map((paragraph, index) => ({
        title: `Key Point ${String(index + 1).padStart(2, "0")}`,
        description: paragraph,
      }))}
      relatedTitle="Read Related Articles"
      relatedHref="/company/blog"
      relatedLinks={relatedPosts.map((item) => ({
        href: `/company/blog/${item.slug}`,
        label: item.title,
        description: item.excerpt,
        eyebrow: `${item.category} | ${item.readTime}`,
      }))}
    >
      <article className="rounded-[30px] border border-[#e6edf5] bg-white px-6 py-6 shadow-[0_18px_36px_rgba(15,23,42,0.06)] small:px-8 small:py-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Full Article
        </p>
        <div className="mt-5 space-y-4 text-sm leading-8 text-slate-600 small:text-base">
          {post.body.map((paragraph, index) => (
            <p key={`${post.slug}-${index}`}>{paragraph}</p>
          ))}
        </div>
      </article>
    </MarketingDetailShell>
  )
}

export default BlogDetailTemplate
