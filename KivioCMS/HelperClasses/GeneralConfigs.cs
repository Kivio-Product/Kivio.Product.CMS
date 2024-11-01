
using System.Text.RegularExpressions;

namespace KivioCMS.HelperClasses
{
	public class GeneralConfigs(IHttpContextAccessor httpContextAccessor)
	{
		public event Action? StylesUpdated;

		public string AddStyle(string customCSS)
		{
			if (string.IsNullOrWhiteSpace(customCSS)) return string.Empty;

			var uniqueCSSId = GenerateCSSUniqueID();
			var processedCSS = Regex.Replace(customCSS,
				@"(\.[\w\-]+)",
				$".{uniqueCSSId} $1");

			var styles = GetStylesCache();
			if (styles.TryAdd(uniqueCSSId, processedCSS))
			{
				StylesUpdated?.Invoke();
			}

			return uniqueCSSId;
		}

		public string GetAllStyles()
		{
			var styles = GetStylesCache();
			return string.Join("\n", styles.Values);
		}

		private Dictionary<string, string> GetStylesCache()
		{
			var context = httpContextAccessor.HttpContext ?? throw new InvalidOperationException("HttpContext no está disponible.");
			if (!context.Items.ContainsKey("DynamicStyles"))
			{
				context.Items["DynamicStyles"] = new Dictionary<string, string>();
			}

			return context.Items["DynamicStyles"] as Dictionary<string, string>
				   ?? throw new InvalidOperationException("Failed to retrieve styles cache.");
		}

		private static string GenerateCSSUniqueID()
		{
			return "custom-style-" + Guid.NewGuid().ToString("N");
		}
	}
}
