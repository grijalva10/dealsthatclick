from frappe import _

def get_context(context):
    context.home_title = _("Expert Commercial Real Estate Services Tailored to Your Needs.")
    context.home_subtitle = _("At dealsthatclick.com, we help you find the best deals in commercial real estate sales, leasing, industrial properties, warehouses, land, and 1031 exchanges.")

    context.properties_title = _("Find Your Ideal Commercial Property")
    context.properties_subtitle = _("Browse our database of commercial properties available for sale or lease.")
    context.properties_cta_label = _("View Properties")
    context.properties_cta_url = "/properties"

    context.services_title = _("Expert Commercial Real Estate Services")
    context.services_subtitle = _("From sales and leasing to industrial properties, warehouses, land, and 1031 exchanges, we have you covered.")
    context.services_cta_label = _("Learn More")
    context.services_cta_url = "/services"

    context.about_title = _("About Us")
    context.about_subtitle = _("Learn more about our team, our history, and our commitment to providing exceptional service.")
    context.about_cta_label = _("Learn More About Us")
    context.about_cta_url = "/about"

    context.testimonials_title = _("What Our Clients Say")
    context.testimonials_subtitle = _("Read success stories from some of our satisfied clients.")
    context.testimonials_cta_label = _("Read More Testimonials")
    context.testimonials_cta_url = "/testimonials"

    context.blog_title = _("Stay Up-to-Date on Commercial Real Estate")
    context.blog_subtitle = _("Read our latest blog posts on industry trends, news, and best practices.")
    context.blog_cta_label = _("Read Our Latest Posts")
    context.blog_cta_url = "/blog"

    context.contact_title = _("Contact Us")
    context.contact_subtitle = _("Have a question or want to schedule a consultation? Get in touch with us today.")
    context.contact_cta_label = _("Get in Touch")
    context.contact_cta_url = "/contact"

    return context
