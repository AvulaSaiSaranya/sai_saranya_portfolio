
# Portfolio Analytics
# Created by Sai Saranya

projects = [
    {"name": "Personal Portfolio", "hours": 25},
    {"name": "Smart Irrigation Controller", "hours": 15},
    {"name": "Python Learning", "hours": 40}
]

def calculate_total_hours(projects):
    total = sum(project["hours"] for project in projects)
    return total

def display_projects(projects):
    print("MY DEVELOPMENT JOURNEY")
    print("----------------------")

    for project in projects:
        print(f"{project['name']}: {project['hours']} hours")

    print("----------------------")
    print("Total Hours:", calculate_total_hours(projects))

display_projects(projects)
