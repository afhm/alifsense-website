import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
    branch,
    clientId: "b774f2c1-4ef4-49b4-a532-771e076cc3ae", // Get this from tina.io
    token: "6c4bbe8434a215c4aa84bccedd0ac30dbf075b84", // Get this from tina.io
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "images",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "page",
                label: "Website Pages",
                path: "content/pages",
                format: "md",
                ui: {
                    router: ({ document }) => `/${document._sys.filename !== "home" ? document._sys.filename : ''}`,
                },
                templates: [

                    {
                        name: "partners",
                        label: "Partners",
                        fields: [
                            {
                                type: "image",
                                name: "picture",
                                label: "Picture",
                            },
                            {
                                type: "string",
                                name: "alt",
                                label: "Picture Description (accessibility)",
                            },
                            {
                                type: "rich-text",
                                name: "intro",
                                label: "Intro",
                            },
                            {
                                label: "Partners Data",
                                name: "partnersData",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: `${item?.tabTitle}` }
                                    },
                                    max: 2,
                                },
                                fields: [
                                    {
                                        label: "Tab Title",
                                        name: "tabTitle",
                                        type: "string",
                                    },
                                    {
                                        label: "Intro",
                                        name: "intro",
                                        type: "string",
                                        ui: {
                                            component: "textarea",
                                        },
                                    },
                                    {
                                        label: "Call To Action",
                                        name: "callToAction",
                                        type: "string",
                                    },
                                    {
                                        label: "Partner Sign-Up Form",
                                        name: "form",
                                        type: "object",
                                        fields: [
                                            {
                                                label: "Placeholder Logo",
                                                name: "logo",
                                                type: "image",
                                            },
                                            {
                                                label: "Email Form to:",
                                                name: "email",
                                                type: "string",
                                                required: true,
                                            },
                                            {
                                                label: "Call To Action",
                                                name: "callToAction",
                                                type: "string",
                                            },
                                            {
                                                label: "Form Title",
                                                name: "title",
                                                type: "string",
                                            },
                                            {
                                                label: "Details and Benefits",
                                                name: "details",
                                                type: "rich-text",
                                            },
                                            {
                                                label: "Form Fields",
                                                name: "fields",
                                                type: "object",
                                                list: true,
                                                ui: {
                                                    itemProps: (item) => {
                                                        return { label: `${item?.fieldName}` }
                                                    },
                                                },
                                                fields: [
                                                    {
                                                        label: "Field Name",
                                                        name: "fieldName",
                                                        type: "string",
                                                        required: true,
                                                    },
                                                    {
                                                        label: "Type",
                                                        name: "type",
                                                        type: "string",
                                                        required: true,
                                                        options: [
                                                            {
                                                                value: "Short answer text",
                                                                label: "Short Answer",
                                                            },
                                                            {
                                                                value: "Paragraph",
                                                                label: "Paragraph",
                                                            },
                                                            {
                                                                value: "Email",
                                                                label: "Email",
                                                            },
                                                            {
                                                                value: "Checkbox",
                                                                label: "Checkbox",
                                                            },
                                                            {
                                                                value: "Disclaimer",
                                                                label: "Disclaimer",
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        label: "Placeholder",
                                                        name: "placeholder",
                                                        type: "string",
                                                        required: true,
                                                        ui: {
                                                            component: "textarea"
                                                        },
                                                    },
                                                    {
                                                        label: "Required",
                                                        name: "required",
                                                        type: "boolean",
                                                        required: true,
                                                    },
                                                    {
                                                        label: "Options",
                                                        name: "options",
                                                        type: "string",
                                                        list: true,
                                                    },
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        label: "Companies or Schools",
                                        name: "companies",
                                        type: "object",
                                        list: true,
                                        ui: {
                                            itemProps: (item) => {
                                                if (!item?.homepage) {
                                                    return { label: item?.name, style: { backgroundColor: "whitesmoke" } }
                                                } else {
                                                    return { label: item?.name }
                                                }
                                            }
                                        },
                                        fields: [
                                            {
                                                label: "Logo",
                                                name: "logo",
                                                type: "image",
                                                required: true,
                                            },
                                            {
                                                label: "Name",
                                                name: "name",
                                                type: "string",
                                                required: true,
                                            },
                                            {
                                                label: "Description",
                                                name: "description",
                                                type: "string",
                                                ui: {
                                                    component: "textarea",
                                                },
                                            },
                                            {
                                                label: "Website",
                                                name: "website",
                                                type: "string",
                                                required: true,
                                            },
                                            {
                                                label: "Displayed on HomePage",
                                                name: "homepage",
                                                type: "boolean",
                                            },
                                        ]
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "impact",
                        label: "Impact",
                        fields: [
                            {
                                name: "milestones",
                                label: "Impact Milestones",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item: any) => {
                                        return { label: `${item?.title}` }
                                    },
                                },
                                fields: [
                                    {
                                        name: "title",
                                        label: "Title",
                                        type: "string",
                                        required: true,
                                    },
                                    {
                                        name: "description",
                                        label: "Description",
                                        type: "string",
                                        required: true,
                                        ui: {
                                            component: "textarea",
                                        }
                                    },
                                ],
                            },
                            {
                                name: "communityTitle",
                                label: "Community Title",
                                type: "string",
                            },
                            {
                                name: "smallIntro",
                                label: "Community Intro Text",
                                type: "string",
                                ui: {
                                    component: "textarea",
                                },
                            },
                            {
                                name: "communityMembers",
                                label: "Community Members",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item: any) => {
                                        return { label: `${item?.tabTitle}` }
                                    },
                                    max: 2,
                                },
                                fields: [
                                    {
                                        name: "tabTitle",
                                        label: "Tab Title",
                                        type: "string",
                                    },
                                    {
                                        name: "tabIntro",
                                        label: "Tab Intro",
                                        type: "string",
                                        ui: {
                                            component: "textarea",
                                        },
                                    },
                                    {
                                        name: "profiles",
                                        label: "Member Profiles",
                                        type: "object",
                                        list: true,
                                        ui: {
                                            itemProps: (item: any) => {
                                                return { label: `${item?.firstName} ${item?.lastName}` }
                                            },
                                        },
                                        fields: [
                                            {
                                                name: "picture",
                                                label: "Picture",
                                                type: "image",
                                            },
                                            {
                                                name: "firstName",
                                                label: "First Name",
                                                type: "string",
                                            },
                                            {
                                                name: "lastName",
                                                label: "Last Name",
                                                type: "string",
                                            },
                                            {
                                                name: "schoolOrEvent",
                                                label: "School/Event",
                                                type: "string",
                                            },
                                            {
                                                name: "year",
                                                label: "Year",
                                                type: "number",
                                            },
                                            {
                                                name: "bio",
                                                label: "Bio/Testimonial",
                                                type: "string",
                                                ui: {
                                                    component: "textarea",
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "contact",
                        label: "Contact",
                        fields: [
                            {
                                name: "formTitle",
                                label: "Form Title",
                                type: "string",
                            },
                            {
                                name: "formSubmit",
                                label: "Form Submit Text",
                                type: "string",
                            },
                            {
                                label: "Email Form to:",
                                name: "email",
                                type: "string",
                                required: true,
                            },
                            {
                                name: "formFields",
                                label: "Contact Form Fields",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: `${item?.fieldName}` }
                                    },
                                },
                                fields: [
                                    {
                                        label: "Field Name",
                                        name: "fieldName",
                                        type: "string",
                                        required: true,
                                    },
                                    {
                                        label: "Type",
                                        name: "type",
                                        type: "string",
                                        required: true,
                                        options: [
                                            {
                                                value: "Short answer text",
                                                label: "Short Answer",
                                            },
                                            {
                                                value: "Paragraph",
                                                label: "Paragraph",
                                            },
                                            {
                                                value: "Email",
                                                label: "Email",
                                            },
                                            {
                                                value: "Checkbox",
                                                label: "Checkbox",
                                            },
                                            {
                                                value: "Disclaimer",
                                                label: "Disclaimer",
                                            }
                                        ]
                                    },
                                    {
                                        label: "Placeholder",
                                        name: "placeholder",
                                        type: "string",
                                        required: true,
                                        ui: {
                                            component: "textarea"
                                        },
                                    },
                                    {
                                        label: "Required",
                                        name: "required",
                                        type: "boolean",
                                        required: true,
                                    },
                                    {
                                        label: "Options",
                                        name: "options",
                                        type: "string",
                                        list: true,
                                    },
                                ]
                            },
                            {
                                name: "socialTitle",
                                label: "Title for Social Media Links",
                                type: "string",
                            },
                            {
                                name: "links",
                                label: "Social Media Links",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: item => {
                                        return { label: item?.type }
                                    }
                                },
                                fields: [
                                    {
                                        name: "type",
                                        label: "Link Type",
                                        type: "string",
                                        options: [
                                            "Email",
                                            "Instagram",
                                            "Facebook",
                                            "YouTube",
                                            "TikTok",
                                            "LinkedIn"
                                        ]
                                    },
                                    {
                                        name: "text",
                                        label: "Link Text",
                                        type: "string"
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        name: "raceInfo",
                        label: "Registration Page",
                        fields: [
                            {
                                name: "raceDay",
                                label: "Race Day (Start Date)",
                                type: "object",
                                fields: [
                                    {
                                        name: "year",
                                        label: "Year",
                                        type: "number",
                                    },
                                    {
                                        name: "month",
                                        label: "Month",
                                        type: "number",
                                        ui: {
                                            validate: (val: number) => {
                                                if (val > 12 || val <= 0) {
                                                    return 'the number must be between 1 and 12'
                                                }
                                            }
                                        }
                                    },
                                    {
                                        name: "day",
                                        label: "Day",
                                        type: "number",
                                        ui: {
                                            validate: (val: number) => {
                                                if (val > 31 || val <= 0) {
                                                    return 'the number must be between 1 and 31'
                                                }
                                            }
                                        }
                                    },
                                ]
                            },
                            {
                                name: "raceInfoIntro",
                                label: "Intro Text",
                                type: "rich-text",
                            },
                            {
                                name: "cta",
                                label: "Call To Action",
                                type: "string",
                            },
                            {
                                name: "benefits",
                                label: "Race Benefits",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.title };
                                    }
                                },
                                fields: [
                                    {
                                        name: "title",
                                        label: "Benefit Title",
                                        type: "string",
                                    },
                                    {
                                        name: "imageIcon",
                                        label: "Benefit Picture",
                                        type: "image"
                                    },
                                ],
                            },
                            {
                                name: "tickets",
                                label: "Tickets",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.title }
                                    }
                                },
                                fields: [
                                    {
                                        name: "title",
                                        label: "Ticket Title",
                                        type: "string"
                                    },
                                    {
                                        name: "description",
                                        label: "Description",
                                        type: "string"
                                    },
                                    {
                                        name: "price",
                                        label: "Price",
                                        type: "string"
                                    },
                                    {
                                        name: "fee",
                                        label: "Run Sign-Up Fee",
                                        type: "string"
                                    },
                                    {
                                        name: "mostPopular",
                                        label: "Most Popular Option",
                                        type: "boolean"
                                    },
                                    {
                                        name: "inPerson",
                                        label: "In-Person Event",
                                        type: "boolean"
                                    },
                                    {
                                        name: "link",
                                        label: "Registration Link",
                                        type: "string"
                                    },
                                    {
                                        name: "features",
                                        label: "Features",
                                        type: "string",
                                        list: true,
                                    },
                                ],
                            },
                            {
                                name: "otherOptions",
                                label: "Other Participation Options",
                                type: "string",
                                ui: {
                                    component: "textarea",
                                }
                            },
                            {
                                name: "donateCTA",
                                label: "Donation CTA",
                                type: "string"
                            },
                            {
                                name: "donate",
                                label: "Donation Link",
                                type: "string"
                            },
                            {
                                name: "sponsorStudentCTA",
                                label: "Student Runner CTA",
                                type: "string"
                            },
                            {
                                name: "sponsorStudent",
                                label: "Student Runner Link",
                                type: "string"
                            },
                            {
                                name: "pastEvents",
                                label: "Past Events",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.date }
                                    },
                                },
                                fields: [
                                    {
                                        name: "type",
                                        label: "Event Type",
                                        type: "string",
                                        options: [
                                            {
                                                value: "recap",
                                                label: "Annual Recap"
                                            },
                                            {
                                                value: "event",
                                                label: "Individual Event"
                                            },
                                        ]
                                    },
                                    {
                                        name: "date",
                                        label: "Date",
                                        type: "string",
                                    },
                                    {
                                        name: "title",
                                        label: "Event Name",
                                        type: "string",
                                    },
                                    {
                                        name: "highlights",
                                        label: "Event Highlights",
                                        type: "string",
                                        list: true,
                                    },
                                    {
                                        name: "pictures",
                                        label: "Pictures",
                                        type: "object",
                                        list: true,
                                        ui: {
                                            itemProps: (item) => {
                                                return { label: item?.alt }
                                            }
                                        },
                                        fields: [
                                            {
                                                name: "picture",
                                                label: "Picture",
                                                type: "image",
                                            },
                                            {
                                                name: "alt",
                                                label: "Image Description (accessibility)",
                                                type: "string",
                                            }
                                        ],
                                    },
                                    {
                                        name: "video",
                                        label: "Recap Video",
                                        type: "image",
                                    },
                                ]
                            },
                        ],
                    },
                    {
                        name: "homepage",
                        label: "Homepage",
                        fields: [
                            {
                                name: "heroSection",
                                label: "Hero Banner",
                                type: "object",
                                fields: [
                                    {
                                        name: "heroVideo",
                                        label: "Welcome Video",
                                        type: "image",
                                    },
                                    {
                                        name: "heroVideoThumbnail",
                                        label: "Welcome Video Thumbnail",
                                        type: "image",
                                    },
                                    {
                                        name: "slogan",
                                        label: "Slogan",
                                        type: "string",
                                    },
                                    {
                                        name: "button",
                                        label: "Button",
                                        type: "string",
                                    },
                                ],
                            },
                            {
                                name: "mainCTA",
                                label: "Call To Action Section",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.name }
                                    },
                                    max: 3,
                                },
                                fields: [
                                    {
                                        name: "name",
                                        label: "CTA Main",
                                        type: "string",
                                    },
                                    {
                                        name: "description",
                                        label: "CTA Description",
                                        type: "string",
                                    },
                                    {
                                        name: "image",
                                        label: "CTA Image",
                                        type: "image",
                                    },
                                    {
                                        type: "string",
                                        name: "alt",
                                        label: "CTA Image Description (accessibility)",
                                    },
                                ]
                            },
                            {
                                name: "stats",
                                label: "Homepage Statistics",
                                type: "object",
                                fields: [
                                    {
                                        name: "stat1",
                                        label: "Statistic #1",
                                        type: "string",
                                    },
                                    {
                                        name: "stat1Description",
                                        label: "Statistic #1 Description",
                                        type: "string",
                                    },
                                    {
                                        name: "stat2",
                                        label: "Statistic #2",
                                        type: "string",
                                    },
                                    {
                                        name: "stat2Description",
                                        label: "Statistic #2 Description",
                                        type: "string",
                                    },
                                    {
                                        name: "cta",
                                        label: "Call To Action",
                                        type: "string",
                                    },
                                ],
                            },
                            {
                                name: "pastEvents",
                                label: "Homepage Past Events",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.title }
                                    },
                                    max: 4,
                                },
                                fields: [
                                    {
                                        name: "title",
                                        label: "Title",
                                        type: "string",
                                    },
                                    {
                                        name: "picture",
                                        label: "Picture",
                                        type: "image",
                                    },
                                    {
                                        type: "string",
                                        name: "alt",
                                        label: "Picture Description (accessibility)",
                                    },
                                ],
                            },
                            {
                                name: "mission",
                                label: "Mission",
                                type: "object",
                                fields: [
                                    {
                                        name: "image",
                                        label: "Picture",
                                        type: "image",
                                    },
                                    {
                                        type: "string",
                                        name: "alt",
                                        label: "Picture Description (accessibility)",
                                    },
                                    {
                                        name: "title",
                                        label: "Title",
                                        type: "string",
                                    },
                                    {
                                        name: "mission",
                                        label: "Mission",
                                        type: "string",
                                        ui: {
                                            component: "textarea"
                                        },
                                    },
                                    {
                                        name: "button",
                                        label: "Button",
                                        type: "string",
                                    },
                                ],
                            },
                            {
                                name: "newsletterSignUp",
                                label: "Newsletter Sign-Up Form",
                                type: "object",
                                fields: [
                                    {
                                        name: "title",
                                        label: "Title",
                                        type: "string",
                                    },
                                    {
                                        name: "description",
                                        label: "Description",
                                        type: "string",
                                        ui: {
                                            component: "textarea"
                                        },
                                    },
                                    {
                                        name: "button",
                                        label: "Button",
                                        type: "string",
                                    },
                                    {
                                        label: "Email Form to:",
                                        name: "email",
                                        type: "string",
                                        required: true,
                                    },
                                    {
                                        name: "formFields",
                                        label: "Form Fields",
                                        type: "object",
                                        list: true,
                                        ui: {
                                            itemProps: (item) => {
                                                return { label: item?.fieldName }
                                            }
                                        },
                                        fields: [
                                            {
                                                label: "Field Name",
                                                name: "fieldName",
                                                type: "string",
                                                required: true,
                                            },
                                            {
                                                label: "Type",
                                                name: "type",
                                                type: "string",
                                                required: true,
                                                options: [
                                                    {
                                                        value: "Short answer text",
                                                        label: "Short Answer",
                                                    },
                                                    {
                                                        value: "Paragraph",
                                                        label: "Paragraph",
                                                    },
                                                    {
                                                        value: "Email",
                                                        label: "Email",
                                                    },
                                                    {
                                                        value: "Checkbox",
                                                        label: "Checkbox",
                                                    },
                                                    {
                                                        value: "Disclaimer",
                                                        label: "Disclaimer",
                                                    }
                                                ]
                                            },
                                            {
                                                label: "Placeholder",
                                                name: "placeholder",
                                                type: "string",
                                                required: true,
                                                ui: {
                                                    component: "textarea"
                                                },
                                            },
                                            {
                                                label: "Required",
                                                name: "required",
                                                type: "boolean",
                                                required: true,
                                            },
                                            {
                                                label: "Options",
                                                name: "options",
                                                type: "string",
                                                list: true,
                                            },
                                        ]
                                    },
                                ],
                            },
                        ],
                    },
                ]
            },
            {
                name: "websiteDetails",
                label: "Site Details",
                path: "content/siteDetails",
                format: "md",
                templates: [
                    {
                        name: "webLinks",
                        label: "Links",
                        fields: [
                            {
                                type: "string",
                                name: "quote",
                                label: "Quote",
                            },
                            {
                                name: "socialLinks",
                                label: "Social Media Links",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                    }
                                },
                                fields: [
                                    {
                                        name: "platform",
                                        label: "Platform",
                                        type: "string",
                                        options: [
                                            "Email",
                                            "Instagram",
                                            "Facebook",
                                            "YouTube",
                                            "TikTok",
                                            "LinkedIn"
                                        ]
                                    },
                                    {
                                        name: "link",
                                        label: "Link",
                                        type: "string",
                                    },
                                    {
                                        name: "showIcon",
                                        label: "Show Icon",
                                        type: "boolean",
                                    }
                                ],
                            },
                        ],
                    },
                    {
                        name: "faq",
                        label: "FAQ",
                        fields: [
                            {
                                name: "faq",
                                label: "Frequently Asked Questions",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                        return { label: item?.question }
                                    }
                                },
                                fields: [
                                    {
                                        name: "question",
                                        label: "Question",
                                        type: "string",
                                        ui: {
                                            component: "textarea"
                                        },
                                    },
                                    {
                                        name: "answer",
                                        label: "Answer",
                                        type: "rich-text",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "navLinks",
                        label: "Navigation Links",
                        fields: [
                            {
                                name: "navLinks",
                                label: "Navigation Links and Banner Images",
                                type: "object",
                                list: true,
                                ui: {
                                    itemProps: (item) => {
                                    }
                                },
                                fields: [
                                    {
                                        name: "bannerImage",
                                        label: "Banner Image",
                                        type: "image",
                                    },
                                    {
                                        type: "string",
                                        name: "bannerImageAlt",
                                        label: "Banner Image Description (accessibility)",
                                    },
                                    {
                                        name: "pageTitle",
                                        label: "Page Title",
                                        type: "string",
                                    },
                                    {
                                        name: "path",
                                        label: "Path (DO NOT EDIT)",
                                        type: "string",
                                    },
                                    {
                                        name: "pageDescription",
                                        label: "Page Description (SEO)",
                                        type: "string",
                                        ui: {
                                            component: "textarea"
                                        },
                                    },
                                    {
                                        name: "pageImage",
                                        label: "Page Image (SEO)",
                                        type: "image",
                                    },
                                    {
                                        name: "highlight",
                                        label: "Highlight Link",
                                        type: "boolean",
                                    },
                                    {
                                        name: "bannerImageLarge",
                                        label: "Banner Image (Large)",
                                        type: "image",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "cta",
                        label: "CTA",
                        fields: [
                            {
                                name: "image",
                                label: "Picture",
                                type: "image",
                            },
                            {
                                type: "string",
                                name: "alt",
                                label: "Picture Description (accessibility)",
                            },
                            {
                                name: "title",
                                label: "CTA Title",
                                type: "string",
                            },
                            {
                                name: "text",
                                label: "CTA Text",
                                type: "string",
                                ui: {
                                    component: "textarea"
                                }
                            },
                            {
                                name: "button",
                                label: "CTA Button",
                                type: "string",
                            },
                        ],
                    },
                    {
                        name: "customBackground",
                        label: "Custom Background",
                        fields: [
                            {
                                name: "customBackground",
                                label: "Custom Background",
                                type: "image"
                            },
                        ],
                    },
                ],
            },
        ],
    },
});