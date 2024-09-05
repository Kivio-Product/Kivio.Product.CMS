using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Extensions;

public class ConfigurationComponentHelper
{
    private readonly IPublishedValueFallback _publishedValueFallback;

    // Constructor to inject IPublishedValueFallback dependency
    public ConfigurationComponentHelper(IPublishedValueFallback publishedValueFallback)
    {
        _publishedValueFallback = publishedValueFallback;
    }

    // Method to cast any IPublishedElement to ConfigurationsComponent
    public ConfigurationsComponent CastToConfigurationsComponent(IPublishedElement element)
    {
        // Ensure the element is not null and is of the correct type
        if (element == null) 
            return null;

        // Check if the element has the alias "configurationsComponent"
        if (element.ContentType.Alias == ConfigurationsComponent.ModelTypeAlias)
        {
            // Cast the element to ConfigurationsComponent
            return new ConfigurationsComponent(element, _publishedValueFallback);
        }

        // Return null if the element cannot be cast
        return null;
    }
}