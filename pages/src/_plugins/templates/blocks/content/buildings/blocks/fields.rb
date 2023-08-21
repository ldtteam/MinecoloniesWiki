class BuildingGuiContentBlockFields
    def header_name(context)
        "fields"
    end

    def image_key(context)
        "fields"
    end

    def image_alt(context)
        "Fields"
    end

    def content_template(context, arguments)
        "%s

- **Assign fields to worker:** Automatic by default. Here you can define if you prefer to manually assign the fields for this {%% building %%}.
- **Fields:** This is the list of recognized fields (recognizable by the crop in its GUI and its distance). This button can show in multiple different ways:
    - If the button shows a red X, it means the field is assigned to the {%% building %%}
        - If it's not greyed out, it may be assigned from the building
        - If it's greyed out, it may not be assigned from the building, that can happen due to multiple reasons
            - The fields are assigned automatically
            - The field has a different reason why it may not be assigned, like a limit of fields reached (hover over the button)
    - If the button shows a green checkmark, it means the field is unassigned to the {%% building %%}
        - If it's greyed out, it means it may not be unassigned because the fields are being assigned automatically
        - If it is not greyed out, it may be assigned

%s"
    end
end