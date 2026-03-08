"""
Generate Track Service Feature - User Story PDF
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.units import mm, cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import os

OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "Track-Service-Feature-UserStory.pdf")

# Colors
BLUE_PRIMARY = HexColor("#2563eb")
BLUE_DARK = HexColor("#1e3a8a")
BLUE_LIGHT = HexColor("#eff6ff")
GREEN = HexColor("#16a34a")
GREEN_LIGHT = HexColor("#f0fdf4")
AMBER = HexColor("#f59e0b")
GRAY_900 = HexColor("#111827")
GRAY_700 = HexColor("#374151")
GRAY_500 = HexColor("#6b7280")
GRAY_200 = HexColor("#e5e7eb")
RED = HexColor("#dc2626")
RED_LIGHT = HexColor("#fef2f2")
WHITE = white

# Styles
styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    "CustomTitle", parent=styles["Title"],
    fontSize=26, textColor=BLUE_DARK, spaceAfter=4*mm,
    fontName="Helvetica-Bold", leading=32
)
subtitle_style = ParagraphStyle(
    "Subtitle", parent=styles["Normal"],
    fontSize=12, textColor=GRAY_500, spaceAfter=8*mm,
    fontName="Helvetica"
)
h1_style = ParagraphStyle(
    "H1", parent=styles["Heading1"],
    fontSize=18, textColor=BLUE_DARK, spaceBefore=10*mm,
    spaceAfter=5*mm, fontName="Helvetica-Bold", leading=22
)
h2_style = ParagraphStyle(
    "H2", parent=styles["Heading2"],
    fontSize=14, textColor=GRAY_900, spaceBefore=6*mm,
    spaceAfter=3*mm, fontName="Helvetica-Bold", leading=18
)
body_style = ParagraphStyle(
    "Body", parent=styles["Normal"],
    fontSize=10.5, textColor=GRAY_700, leading=16,
    spaceAfter=3*mm, fontName="Helvetica"
)
bullet_style = ParagraphStyle(
    "Bullet", parent=body_style,
    leftIndent=12*mm, bulletIndent=5*mm,
    spaceBefore=1.5*mm, spaceAfter=1.5*mm
)
step_title_style = ParagraphStyle(
    "StepTitle", parent=styles["Normal"],
    fontSize=11, textColor=BLUE_PRIMARY, fontName="Helvetica-Bold",
    leading=15, spaceAfter=1*mm
)
step_body_style = ParagraphStyle(
    "StepBody", parent=styles["Normal"],
    fontSize=10, textColor=GRAY_700, fontName="Helvetica",
    leading=14, spaceAfter=2*mm
)
note_style = ParagraphStyle(
    "Note", parent=styles["Normal"],
    fontSize=9.5, textColor=GRAY_500, fontName="Helvetica-Oblique",
    leading=13, leftIndent=5*mm, spaceAfter=3*mm
)
tag_style = ParagraphStyle(
    "Tag", parent=styles["Normal"],
    fontSize=9, textColor=BLUE_PRIMARY, fontName="Helvetica-Bold",
    spaceBefore=2*mm, spaceAfter=2*mm
)


def colored_box(text, bg_color, text_color, width=None):
    """Create a colored box with text."""
    style = ParagraphStyle("box", parent=body_style, textColor=text_color, fontSize=10, leading=14)
    p = Paragraph(text, style)
    t = Table([[p]], colWidths=[width or 170*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg_color),
        ("BOX", (0, 0), (-1, -1), 0.5, bg_color),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("ROUNDEDCORNERS", [4, 4, 4, 4]),
    ]))
    return t


def divider():
    return HRFlowable(width="100%", thickness=0.5, color=GRAY_200, spaceAfter=4*mm, spaceBefore=4*mm)


def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_PATH, pagesize=A4,
        topMargin=20*mm, bottomMargin=20*mm,
        leftMargin=20*mm, rightMargin=20*mm
    )
    story = []

    # ─── COVER / HEADER ───
    story.append(Paragraph("RJ Roadside Assistance", ParagraphStyle(
        "brand", parent=styles["Normal"], fontSize=11, textColor=BLUE_PRIMARY,
        fontName="Helvetica-Bold", spaceAfter=2*mm
    )))
    story.append(Paragraph("Track Service Feature", title_style))
    story.append(Paragraph("User Story & Feature Documentation", subtitle_style))

    story.append(colored_box(
        "<b>Feature:</b> Live Service Tracking &nbsp;&nbsp;|&nbsp;&nbsp;"
        "<b>Route:</b> /track-service &nbsp;&nbsp;|&nbsp;&nbsp;"
        "<b>Status:</b> Implemented &nbsp;&nbsp;|&nbsp;&nbsp;"
        "<b>Version:</b> 1.0",
        BLUE_LIGHT, GRAY_900
    ))
    story.append(Spacer(1, 5*mm))

    # ─── 1. OVERVIEW ───
    story.append(Paragraph("1. Feature Overview", h1_style))
    story.append(Paragraph(
        "The <b>Track Service</b> page allows customers to enter a tracking ID and see the "
        "real-time status of their roadside assistance request. It shows a visual progress timeline, "
        "service details, mechanic information, ETA, and call-to-action buttons \u2014 giving customers "
        "full transparency from the moment they request help to completion.",
        body_style
    ))

    # ─── 2. USER STORIES ───
    story.append(Paragraph("2. User Stories", h1_style))

    user_stories = [
        ("US-01", "As a customer", "I want to track my service request using a tracking ID",
         "so that I know the real-time status of my roadside assistance."),
        ("US-02", "As a customer", "I want to see which mechanic is assigned and their rating",
         "so that I feel confident about the person coming to help me."),
        ("US-03", "As a customer", "I want to see the estimated arrival time",
         "so that I know how long I need to wait."),
        ("US-04", "As a customer", "I want to call the mechanic directly from the tracking page",
         "so that I can communicate my exact location or issue."),
        ("US-05", "As a customer", "I want to see when my service is completed",
         "so that I can share feedback about my experience."),
        ("US-06", "As a new visitor", "I want to try demo tracking IDs",
         "so that I can see how the tracking system works before I need it."),
    ]

    table_data = [["ID", "Role", "Action", "Benefit"]]
    for sid, role, action, benefit in user_stories:
        table_data.append([
            Paragraph(f"<b>{sid}</b>", ParagraphStyle("id", fontSize=8.5, textColor=BLUE_PRIMARY, fontName="Helvetica-Bold")),
            Paragraph(role, ParagraphStyle("r", fontSize=9, textColor=GRAY_700, fontName="Helvetica")),
            Paragraph(action, ParagraphStyle("a", fontSize=9, textColor=GRAY_900, fontName="Helvetica")),
            Paragraph(benefit, ParagraphStyle("b", fontSize=9, textColor=GRAY_500, fontName="Helvetica-Oblique")),
        ])

    t = Table(table_data, colWidths=[18*mm, 28*mm, 60*mm, 60*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, 0), 9),
        ("BOTTOMPADDING", (0, 0), (-1, 0), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 8),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BLUE_LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 1), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 1), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(t)

    # ─── 3. USER FLOW ───
    story.append(Paragraph("3. User Flow (Step-by-Step)", h1_style))

    flow_steps = [
        ("Step 1: Landing on Track Service Page",
         "User navigates to /track-service via the header nav, footer link, home page hero button, "
         "or CTA sections across the site.",
         "Sees a hero banner, search bar with placeholder text, and 3 clickable demo tracking IDs below the search bar."),

        ("Step 2: Entering a Tracking ID",
         "User types their tracking ID (e.g., RJ-2024-001) into the search input and clicks 'Track Now', "
         "OR clicks one of the demo ID buttons.",
         "A loading spinner appears on the button showing 'Searching...' state for ~1 second."),

        ("Step 3: Viewing Service Status",
         "After search completes, the results section slides in with a fade-up animation. "
         "A two-column layout appears:",
         "<b>Left Column \u2014 Status Timeline:</b> A vertical 5-step progress tracker with animated indicators. "
         "Completed steps show blue checkmarks, the current step has a pulsing dot, future steps are grayed out.<br/><br/>"
         "<b>Right Column \u2014 Service Details:</b> Service type, vehicle info, location, and request time in a card layout."),

        ("Step 4: Checking ETA",
         "Below the service details, a highlighted blue ETA card shows the estimated arrival time in minutes.",
         "If the mechanic has already arrived, it displays 'Arrived' instead of minutes. "
         "The ETA card is hidden for completed services."),

        ("Step 5: Mechanic Information",
         "A mechanic card displays the assigned mechanic's name (with avatar initial), star rating, "
         "and total jobs completed.",
         "A green 'Call Mechanic' button lets the user directly call the mechanic via tel: link."),

        ("Step 6: Service Completed",
         "When service status reaches step 5 (Completed), a green success card appears with a checkmark icon.",
         "Shows a 'Share Feedback' button that links to the Contact page for the user to share their experience."),
    ]

    for step_title, description, detail in flow_steps:
        story.append(KeepTogether([
            Paragraph(step_title, step_title_style),
            Paragraph(description, step_body_style),
            Paragraph(detail, note_style),
            Spacer(1, 2*mm),
        ]))

    # ─── 4. DEMO DATA ───
    story.append(divider())
    story.append(Paragraph("4. Demo Tracking Data", h1_style))
    story.append(Paragraph(
        "Three demo tracking IDs are available for testing and demonstration purposes:",
        body_style
    ))

    demo_data = [
        ["Field", "RJ-2024-001", "RJ-2024-002", "RJ-2024-003"],
        ["Service", "Flat Tyre Assistance", "Battery Jump Start", "Towing Service"],
        ["Vehicle", "Maruti Suzuki Swift", "Hyundai Creta", "Honda City"],
        ["Location", "Jagatpura Flyover", "Mansarovar Metro", "MI Road"],
        ["Mechanic", "Vikram Singh", "Ramesh Kumar", "Suresh Meena"],
        ["Rating", "4.8 \u2605", "4.9 \u2605", "4.7 \u2605"],
        ["ETA", "18 minutes", "8 minutes", "Completed"],
        ["Status", "On The Way (Step 3)", "Arrived (Step 4)", "Completed (Step 5)"],
    ]

    dt = Table(demo_data, colWidths=[30*mm, 43*mm, 43*mm, 43*mm])
    dt.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
        ("TEXTCOLOR", (0, 1), (0, -1), GRAY_900),
        ("BACKGROUND", (0, 1), (0, -1), BLUE_LIGHT),
        ("ROWBACKGROUNDS", (1, 1), (-1, -1), [WHITE, HexColor("#f9fafb")]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ]))
    story.append(dt)

    # ─── 5. PAGE ENTRY POINTS ───
    story.append(Paragraph("5. Entry Points (How Users Reach This Page)", h1_style))

    entries = [
        ("\u2022 <b>Header Navigation:</b> 'Track Service' link in the main nav bar (desktop & mobile)"),
        ("\u2022 <b>Footer Quick Links:</b> 'Track Service' link in the footer"),
        ("\u2022 <b>Home Page Hero:</b> Green 'Track Service' button alongside 'Call Now' and 'Book Service'"),
        ("\u2022 <b>Home Page CTA:</b> 'Track Your Service' button in the bottom CTA section"),
        ("\u2022 <b>Services Page CTA:</b> 'Track Service' button next to 'Call Now' and 'WhatsApp Us'"),
        ("\u2022 <b>Direct URL:</b> Users can navigate directly to /track-service"),
    ]
    for entry in entries:
        story.append(Paragraph(entry, bullet_style))

    # ─── 6. UI COMPONENTS ───
    story.append(Paragraph("6. UI Components Breakdown", h1_style))

    components = [
        ["Component", "Description", "Behavior"],
        ["Hero Section", "Blue gradient banner with breadcrumb, badge, title, subtitle",
         "Static, matches site-wide hero pattern"],
        ["Search Card", "White card with search input + Track Now button + demo IDs",
         "Fade-in-up on scroll, floats above hero with negative margin"],
        ["Status Timeline", "5-step vertical progress tracker",
         "Blue checkmarks for done, pulsing dot for current, gray for pending"],
        ["Service Details Card", "4 rows: service, vehicle, location, time",
         "Key-value layout with subtle row dividers"],
        ["ETA Card", "Blue gradient highlight card with clock icon",
         "Shows minutes or 'Arrived', hidden when completed"],
        ["Mechanic Card", "Avatar, name, rating stars, job count, call button",
         "Green call button with hover lift effect"],
        ["Completed Card", "Green success message with feedback link",
         "Only shown when status = Step 5"],
        ["How It Works", "3-column grid explaining the tracking process",
         "Only shown when no tracking result is active"],
    ]

    ct = Table(components, colWidths=[35*mm, 60*mm, 68*mm])
    ct.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
        ("TEXTCOLOR", (0, 1), (0, -1), BLUE_PRIMARY),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BLUE_LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(ct)

    # ─── 7. FILES MODIFIED ───
    story.append(Paragraph("7. Files Created & Modified", h1_style))

    files_data = [
        ["File", "Action", "Purpose"],
        ["src/pages/track-service/track-service.js", "Created", "Main Track Service page component"],
        ["src/styles/track-service.css", "Created", "All styling for the track service page"],
        ["src/routes/routes.js", "Modified", "Added /track-service route"],
        ["src/components/header/header.js", "Modified", "Added 'Track Service' to nav links"],
        ["src/components/footer/footer.js", "Modified", "Added 'Track Service' to quick links"],
        ["src/components/page-title/page-title.js", "Modified", "Added page title mapping"],
        ["src/pages/home/home.js", "Modified", "Added Track Service buttons in hero & CTA"],
        ["src/pages/services/services.js", "Modified", "Added Track Service button in CTA"],
    ]

    ft = Table(files_data, colWidths=[75*mm, 20*mm, 68*mm])
    ft.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE_DARK),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("FONTNAME", (0, 1), (0, -1), "Helvetica"),
        ("TEXTCOLOR", (0, 1), (0, -1), GRAY_900),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BLUE_LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.5, GRAY_200),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    story.append(ft)

    # ─── 8. RESPONSIVE BEHAVIOR ───
    story.append(Paragraph("8. Responsive Behavior", h1_style))
    responsive = [
        ("\u2022 <b>Desktop (>768px):</b> Two-column result grid (timeline left, details right). "
         "Search bar and button side by side. 3-column How It Works grid."),
        ("\u2022 <b>Mobile (\u2264768px):</b> Single-column stacking for all sections. "
         "Search button goes full-width below input. Service detail items stack vertically. "
         "How It Works cards stack into single column."),
    ]
    for r in responsive:
        story.append(Paragraph(r, bullet_style))

    # ─── 9. FUTURE ENHANCEMENTS ───
    story.append(Paragraph("9. Future Enhancements", h1_style))
    story.append(colored_box(
        "<b>Planned improvements when backend is available:</b><br/>"
        "\u2022 Real-time tracking with WebSocket/polling for live status updates<br/>"
        "\u2022 Google Maps integration to show mechanic location on a map<br/>"
        "\u2022 SMS/WhatsApp notification with tracking link after service request<br/>"
        "\u2022 Push notifications for status changes (PWA ready)<br/>"
        "\u2022 Rating & review submission directly from the completed state card",
        GREEN_LIGHT, GRAY_900
    ))

    story.append(Spacer(1, 10*mm))
    story.append(divider())
    story.append(Paragraph(
        "Document generated for RJ Roadside Assistance \u2014 Track Service Feature v1.0",
        ParagraphStyle("footer", parent=styles["Normal"], fontSize=8, textColor=GRAY_500,
                       fontName="Helvetica-Oblique", alignment=TA_CENTER)
    ))

    doc.build(story)
    print(f"PDF generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    build_pdf()
